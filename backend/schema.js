import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        id: ID!
        name: String!
        email: String!
        token: String
    }

    type Query {
        me: User
    }

    type Mutation {
        register(name: String!, email: String!, password: String!): User
        login(email: String!, password: String!): User
    }
`;