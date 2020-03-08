import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import { type } from './src/schema/type'
import { comments } from './store'

const resolvers = {
  Query: {
    comments: () => comments
  }
}

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [type]
})

const server = new ApolloServer({schema})
server.listen().then(({url})=> {
  console.log(`Server ready at ${url}`)
})