const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./Schema/TypeDefs");

const express = require("express");
const app = express();

const server = new ApolloServer({ typeDefs, resolver});

server.applyMiddleware({ app });

app.listen({ port: 3001}, () => {
    console.log("Server is running on 3001");
});