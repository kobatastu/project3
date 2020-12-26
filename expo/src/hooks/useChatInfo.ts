import { gql, useQuery } from "@apollo/client"

const CHAT_QUERY = gql`
  {
    chats(userId:1){
      roomId
      roomMember {
        userId
        userName
      }
      chatContent {
        userId
        content
      }
    }
  }
`;

export const useChatInfo = () => {
  const { loading, error, data } = useQuery(CHAT_QUERY);
  if (loading) return null;
  if (error) return new Error('error');
  if (!data) return new Error('There is no data');
  return {chats: data.chats}
}
