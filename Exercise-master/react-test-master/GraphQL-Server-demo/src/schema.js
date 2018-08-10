import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolver'

//schema definition
const typeDefs = `                    
    type Channel{
       id:ID!,
       name:String,
       message:[Message]!
    }

    type Message{
        id:ID!,
        text:String
    }

    type Query{
        channels:[Channel],
        channel(id:ID!):Channel
    }

    type Mutation{
        addChannel(name:String!):Channel
    }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers }); //Binds the schema with the resolvers

export { schema };

