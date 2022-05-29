const { ApolloServer, gql } = require("apollo-server");
//below is known as tagged template literal
const typeDefs = gql`
  type User {
    name: String
    username: String
  }
  #Queries -like get in REST World
  type Query {
    getAllUsers: [User]
  }
`;

//console.log(typeDefs);

module.exports = { typeDefs };
