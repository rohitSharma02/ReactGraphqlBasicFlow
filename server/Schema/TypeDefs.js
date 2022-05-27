const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        username: String!
    }

#Queries 
 
type Query  {
    getAllUsers: User! 
}

#Mutation
`

module.exports = { typeDefs };