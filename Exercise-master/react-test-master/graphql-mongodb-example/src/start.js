import { MongoClient, ObjectId } from 'mongodb'
import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import cors from 'cors'

const URL = 'http://localhost'
const PORT = 3001
const MONGO_URL = 'mongodb://localhost:27017/TradeService'

const prepare = (o) => {
  o._id = o._id.toString()
  return o
}

export const start = async () => {
  try {
    const db = await MongoClient.connect(MONGO_URL)

    const Trades = db.collection("Trades")

    const typeDefs = [`
      type Query {
        trades:[Trade]
      }

      type Trade {
        _id:String
        idd: String
        commodity:String
        side:String
        price:Int
        quantity:Int
        counterparty:String 
        location:String
      }

      input tradeType{
        idd: String
        commodity:String
        side:String
        price:Int
        quantity:Int
        counterparty:String 
        location:String
      }

      type Mutation {
        createTrade(trade:tradeType): Trade
      }

      schema {
        query: Query
        mutation: Mutation
      }
    `];

    var allTrades = function () {
      var trades;
      return new Promise(function (resolve, reject) {
        Trades.find().toArray(function (err, docs) {
          // if (err) {
          //   // Reject the Promise with an error
          //   return reject(err)
          // }
          trades = docs;
          // Resolve (or fulfill) the promise with data
          resolve(trades)
        })
      })
    }

    const resolvers = {
      Query: {
        trades: function() {
          allTrades.then((result) => {
            return result
          }).catch((err) => {
            reject(err)
          });
        }
      },
      // trades: async () => {
      //   return (await Trades.find({}).toArray()).map(prepare)
      // }
      Mutation: {
        createTrade: async (root, args, context, info) => {
          const res = await Trades.insert(args)
          return prepare(await Trades.findOne({ _id: res.insertedIds[1] }))
        },
      },
    }

    const schema = makeExecutableSchema({
      typeDefs,
      resolvers
    })

    const app = express()

    app.use(cors())

    app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))

    const homePath = '/graphiql'

    app.use(homePath, graphiqlExpress({
      endpointURL: '/graphql'
    }))

    app.listen(PORT, () => {
      console.log(`Visit ${URL}:${PORT}${homePath}`)
    })

  } catch (e) {
    console.log(e)
  }

}
