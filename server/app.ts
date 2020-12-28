import express from 'express';
import http from 'http';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

import { type } from './src/schema';
import { resolvers } from './src/resolvers/resolver';

const app = express();
const PORT = 4000;

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [type],
});
const server = new ApolloServer({ schema });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  console.log(`Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
});
