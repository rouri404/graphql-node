import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { randomUUID } from "node:crypto";

const typeDefs = `#graphql
    type hello {
        id: ID!
        message: String!
    }
    
    type Query {
        hello: hello!
    }
`;

const resolvers = {
    Query: {
        hello: () => ({
            id: randomUUID(),
            message: "oi gente",
        }),
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});

console.log(`Servidor iniciado em ${url}`);