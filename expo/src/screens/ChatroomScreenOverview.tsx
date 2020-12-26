import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

const ChatroomScreen = (props) => {
  const [message, setMessage] = useState({ messages: [] })
  const {chatContent} = props.route.params.data

  useEffect(() => {
    chatContent.map((chat,index) => {
      let userName = 'counter';
      if(chat.userId===1){
        userName === 'you'
      }
      let newMessage = message.messages
      newMessage.push(
        {
          _id: index+1,
          text: chat.content,
          createdAt: new Date(2019, (12 - 1), index+1),
          user: {
            _id: Number(chat.userId),
            name: userName,
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      )
      setMessage({
        messages: newMessage
      })
    })
  },[])

  const onSend = additionalMessage => {
    setMessage({
      messages: GiftedChat.append(
        message.messages, additionalMessage
      )
    })
  }

  return (
    <GiftedChat
      messages = { message.messages }
      onSend = { messages => onSend( messages )}
      user = {{
        _id:1,
        name:'you',
        avatar:'https://placeimg.com/140/140/any'
      }}
    />
  )
}

export default ChatroomScreen;
