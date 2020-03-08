import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"

const link = new HttpLink({
  uri: "http://localhost:4000/graphql"
});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-first'
    }
  }
})
