import express from "express";
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import cors from "cors";
import jwt from "jsonwebtoken";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { MONGO_URI, JWT_SECRET } from "./config.js"

const app = express();
app.use(cors());

const getUser = (token) => {
    try {
        if (token) {
            return jwt.verify(token, JWT_SECRET)
        }
        return null;
    } catch {
        return null;
    }
};

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => {
            const token = req.headers.authorization || "";
            const user = getUser(token.replace("Bear ", ""));
            return { user };
        }
    });

    await server.start();
    server.applyMiddleware({ app });

    mongoose.connect(MONGO_URI)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.error(err));

    app.listen(4000, () => {
        console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
    })
}

startServer();