import { useEffect, useState } from 'react';
import { gql, useQuery, useSubscription } from '@apollo/client';

const CHAT_QUERY = gql`
  {
    chats(userId:"1"){
      roomId
      roomMember {
        userId
        userName
      }
      chatContent {
        userId
        content
        createdAt
      }
    }
  }
`;

const CHAT_SUBSCRIPTION = gql`
subscription {
  subscribeChat{
    chatContent {
      userId
      content
      createdAt
    }
  }
}
`;

export const useChatInfo = () => {
  const [chatData, setChatData] = useState([]);
  const { loading, error, data } = useQuery(CHAT_QUERY);

  // subscriptionはまだ実装できていない
  useSubscription(
    CHAT_SUBSCRIPTION,
    { onSubscriptionData: ({ subscriptionData }) => {
      const addData = subscriptionData.data.subscribeChat;
      console.log('ここ', subscriptionData);
      setChatData([...chatData, addData]);
    } }
  );

  useEffect(() => {
    if (data) {
      setChatData(data.chats);
    }
  }, [data]);

  if (loading) return null;
  if (error) throw new Error(error.message);
  if (!data) throw new Error('There is no data');
  return { chats: data.chats };
};
