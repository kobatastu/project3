import * as express from 'express'
import { ApolloServer, makeExecutableSchema, PubSub } from 'apollo-server-express';
import * as bodyParser from 'body-parser'
import {https} from 'firebase-functions'
import expressInterceptor from 'express-interceptor'

import { type } from './src/schema/type'
import { queryProfs, queryChats } from './store'

const pubsub = new PubSub();
const app = express();
const PORT = 4000;

const resolvers = {
  Query: {
    profs: async () => {
      const profs = await queryProfs
      return profs
    },
    prof: async (root, args) => {
      const profs = await queryProfs
      console.log(profs)
      const prof = profs.find(p => p.userId === args.userId)
      console.log(prof)
      return prof
    },
    chats: async (root, args) => {
      const profs = await queryProfs
      const chats = await queryChats
      const userProf = profs.find(p => p.userId === args.userId);
      const { chatRoomIds } = userProf;
      let result = [];
      chatRoomIds.map(chatRoomId => {
        chats.map(chat => {
          if(chat.roomId === chatRoomId){
            chat.roomMember = chat.roomMember.filter(p => p.userId !== args.userId)
            result.push(chat);
          }
        })
      })
      return result;
    }
  },
  // Mutation: {
  //   addChat: (root, args) => {
  //     chats[roomId].chatContent.push({
  //       userId: args.userId,
  //       content: args.content
  //     });
  //     pubsub.publish("ADD_CHAT",{
  //       subscribeChat: {
  //         userId: args.userId,
  //         content: args.content
  //       }
  //     });
  //     return chats
  //   }
  // },
  // Subscription: {
  //   subscribeChat: {
  //     subscribe: () => pubsub.asyncIterator(["ADD_CHAT"])
  //   }
  // }
}

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: [type]
})

const server = new ApolloServer({schema})

// const FIREBASE_PROJECT_ID = '';
// const FIREBASE_API_KEY = '';
// const clientCode = `
// <script src="https://www.gstatic.com/firebasejs/5.7.1/firebase.js"></script>
// <script>
//   const config = {
//     apiKey: '${FIREBASE_API_KEY}',
//     projectId: '${FIREBASE_PROJECT_ID}',
//   }
//   firebase.initializeApp(config)
// </script>
// `
// const END_BODY = '</body></html>'

// app.use(
//   expressInterceptor((req,res) => ({
//     intercept: (body, send) => {
//       send(body.replace(END_BODY, clientCode + END_BODY))
//     }
//   }))
// )

app.use(bodyParser.json())

server.applyMiddleware({app, path: '/graphql'})

exports.graphql = https.onRequest(server.createGraphQLServerOptions)

app.listen({port: PORT}, () => {
  console.log(`Server ready at ${PORT}`);
})

// server.listen().then(({url, subscriptionsUrl})=> {
//   console.log(`Server ready at ${url}`);
//   console.log(`Subscriptions ready at ${subscriptionsUrl}`)
// })