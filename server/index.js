/*
    Significance of the file is wiring up the express middle wire.
    Tried to make this file in a way that it will be hardly touched.
*/
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolver } = require("./Schema/Resolver");

const express = require("express");
const app = express();
const PORT = 3001;

//async function was required to fix Apollo Server await server.start bug .
//We are creating apollo server
async function createApolloServer() {
 //passing into apollo constructor   
    const server = new ApolloServer({ 
        typeDefs, 
        resolver
    });
 //instantiatiating the apollo server
    await server.start();
//this will install the apollo server on express app   
    server.applyMiddleware({ app });
}
createApolloServer();
//console.log(resolver);

app.listen(PORT, () => {
    console.log('Server is running on : http://localhost:3001/graphql');
});