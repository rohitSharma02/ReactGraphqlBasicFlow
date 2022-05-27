const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");
const { resolver } = require("./Schema/Resolver");

const express = require("express");
const app = express();

//async function was required to fix Apollo Server await server.start bug .
async function startServer() {
    const server = new ApolloServer({ typeDefs, resolver});
    await server.start();
    server.applyMiddleware({ app });
}
startServer();

app.listen({ port: 3001}, () => {
    console.log("Server is running on 3001");
});