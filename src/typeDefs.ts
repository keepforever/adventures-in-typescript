import { gql } from 'apollo-server-express';


//Apollo-Server-2 introduces the use of gql tag to define Schema
export const typeDefs = gql`
  type Query {
    hello: String!
  }

  type Mutation {
    register(email: String!, password: String!): Boolean!
  }
`

