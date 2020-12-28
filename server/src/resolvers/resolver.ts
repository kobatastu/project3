import { PubSub } from 'apollo-server';

import { profs, chats } from '../infra/store';

const pubsub = new PubSub();

export const resolvers = {
  Query: {
    profs: async () => {
      return profs;
    },
    prof: async (root, args) => {
      const prof = profs.find((p) => p.userId === args.userId);
      return prof;
    },
    chats: async (root, args) => {
      const userProf = profs.find((p) => p.userId === args.userId);
      const { chatRoomIds } = userProf;
      const result = [];
      chatRoomIds.map((chatRoomId) => {
        chats.map((chat) => {
          if (chat.roomId === chatRoomId) {
            chat.roomMember = chat.roomMember.filter((p) => p.userId !== args.userId);
            result.push(chat);
          }
        });
      });
      return result;
    },
  },
  Mutation: {
    addChat: (root, args) => {
      const userChats = chats.find((p) => p.roomId === args.roomId);
      userChats.chatContent.push({
        userId: args.userId,
        content: args.content,
        createdAt: args.createdAt,
      });
      pubsub.publish('ADD_CHAT', {
        subscribeChat: {
          userId: args.userId,
          content: args.content,
          createdAt: args.createdAt,
        },
      });
      return userChats;
    },
  },
  // subscriptionはまだ実装できていない
  Subscription: {
    subscribeChat: {
      subscribe: () => pubsub.asyncIterator(['ADD_CHAT']),
    },
  },
};
