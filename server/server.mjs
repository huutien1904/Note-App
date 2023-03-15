import express from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import fakeData from "./fakeData/index.js";
const app = express();
const httpServer = http.createServer(app);
const typeDefs = `#graphql
  type Folder {
    id:String,
    name:String,
    createdAt:String,
    author:Author
  }
  type Author {
    id:String,
    name:String
  }
  type Query {
        folders:[Folder]
    }
`;
const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
    },
  },
  Folder: {
    author: (parent, args) => {
      const authorId = parent.authorId;
      return fakeData.authors.find((author) => author.id === authorId);
    },
  },
};
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));
await new Promise((resolver) => httpServer.listen({ port: 4000 }, resolver));
console.log("Server ready at port 4000");