import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolver'

export const typeDefs = `

type Trade{
    idd:ID!
    commodity:String
    side:String
    counterparty:String
    price:Int
    quantity:Int
    location:String
}

type Query{
    trades:[Trade]
}



`;
// type Mutation{
//     addTrade(trade:Trade):Trade
// }


console.log("Hello");
const schema = makeExecutableSchema({ typeDefs, resolvers }); //Binds the schema with the resolvers

export { schema };