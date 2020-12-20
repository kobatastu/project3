import express from 'express';
import { ApolloServer, makeExecutableSchema, PubSub } from 'apollo-server-express';

import { type } from './schema';
import { resolvers } from './src/resolvers/resolver';

// const pubsub = new PubSub();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [type],
});

const server = new ApolloServer({ schema });

server.applyMiddleware({ app, path: '/graphql' });

// exports.graphql = https.onRequest(server.createGraphQLServerOptions);

app.listen({ port: PORT }, () => {
  console.log(`Server ready at PORT: ${PORT}`);
});

// server.listen().then(({url, subscriptionsUrl})=> {
//   console.log(`Server ready at ${url}`);
//   console.log(`Subscriptions ready at ${subscriptionsUrl}`)
// })
