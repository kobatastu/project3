import React from 'react'
import { ScrollView, Button } from 'react-native';
import { Card, ListItem } from 'react-native-elements';

import { useChatInfo } from '../hooks/useChatInfo';
import Loading from '../components/common/Loading'

const ChatScreen = ({navigation}) => {
  const ChatData = useChatInfo();
  if (!ChatData) return <Loading />
  const { chats } = ChatData as any
  console.log(chats)
  return (
    <ScrollView style={{flex:1}}>
      {chats.map(( chat, index ) => 
        <Card containerStyle={{padding:0}}>
          <ListItem
            key={index}
            title={chat.roomMember[0].userName}
            subtitle = {chat.chatContent.slice(-1)[0].content}
            leftAvatar={{ source: require('../../assets/user.jpg') }}
            bottomDivider
            chevron
            onPress={() => navigation.navigate('Chatroom',{data:chat})}
          />
        </Card>
      )}
    </ScrollView>
  )
}

export default ChatScreen;