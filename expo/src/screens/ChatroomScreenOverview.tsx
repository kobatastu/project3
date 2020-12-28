import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

import { ADD_CHAT } from '../hooks/useChatMutation';

const ChatroomScreen = (props) => {
  const [message, setMessage] = useState({ messages: [] });
  const [addChat] = useMutation(ADD_CHAT);
  const { chatContent } = props.route.params.data;

  useEffect(() => {
    chatContent.forEach((chat, index) => {
      const userName = chat.userId === '1' ? 'counter' : 'you';
      const newMessage = message.messages;
      newMessage.unshift(
        {
          _id: index + 1,
          text: chat.content,
          createdAt: new Date(chat.createdAt * 1000),
          user: {
            _id: Number(chat.userId),
            name: userName,
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      );
      setMessage({
        messages: newMessage
      });
    });
  }, []);

  const onSend = (additionalMessage) => {
    addChat({
      variables: {
        roomId: '1',
        userId: '1', 
        createdAt: Math.floor(new Date().getTime() / 1000),
        content: additionalMessage[0].text
      }
    });
    setMessage({
      messages: GiftedChat.append(
        message.messages, additionalMessage
      )
    });
  };

  return (
    <GiftedChat
      messages={message.messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
        name: 'you',
        avatar: 'https://placeimg.com/140/140/any'
      }}
    />
  );
};

export default ChatroomScreen;
