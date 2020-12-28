import { gql } from '@apollo/client';

export const ADD_CHAT = gql`
    mutation AddChat(
      $roomId: String!,
      $userId: String!,
      $createdAt: Int!,
      $content: String!
    ) {
    addChat(
      roomId:$roomId,
      userId:$userId,
      createdAt: $createdAt,
      content:$content
    ){
      chatContent{
        createdAt
        userId
        content
      }
    }
  }
`;
