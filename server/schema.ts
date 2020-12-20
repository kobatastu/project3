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
    prof(userId: Int): Prof
    chats(userId: Int): [Chat]
  }

  type Subscription {
    AddChatContent: Chat
  }
`;
