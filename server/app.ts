import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { type } from './schema'
import { resolvers } from './src/resolvers/resolver'

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [type]
})

const server = new ApolloServer({schema})
server.listen().then(({url})=> {
  console.log(`Server ready at ${url}`)
})