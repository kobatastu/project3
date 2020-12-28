import { gql } from 'apollo-server';

export const type = gql`
  type Prof {
    userId: ID
    userName: String
    icon: String
    prof: String
    loadMap: [String]
    chatRoomIds: [ID]
  }

  type ChatContent {
    userId: ID
    content: String
    createdAt: Int
  }

  type RoomMember {
    userId: ID
    userName: String
  }

  type Chat {
    roomId: ID
    roomMember: [RoomMember]
    chatContent: [ChatContent]
  }

  type Query {
    profs: [Prof]
    prof(userId: String): Prof
    chats(userId: String): [Chat]
  }

  type Mutation {
    addChat(roomId: String, userId: String, createdAt: Int, content: String): Chat
  }

  type Subscription {
    subscribeChat: Chat
  }
`;
