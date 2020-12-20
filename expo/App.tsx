import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { MaterialCommunityIcons,MaterialIcons,FontAwesome } from '@expo/vector-icons'
import { ApolloProvider } from '@apollo/client'

import HomeScreen from './src/screens/HomeScreenOverview'
import ChatScreen from './src/screens/ChatScreenOverview'
import ChatroomScreen from './src/screens/ChatroomScreenOverview'
import BoardScreen from './src/screens/BoardScreenOverview'
import ProfileScreen from './src/screens/ProfileScreenOverview'
import { apolloClient } from './src/lib/apolloClient'



const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const HomeStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  )
}

const ChatStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Chatroom" component={ChatroomScreen} />
    </Stack.Navigator>
  )
}

const BoardStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Board" component={BoardScreen} />
    </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  )
}

const judgeTabBarVisible = route => {
  if(route.state && route.state.index !== 0){
    return false;
  }
  return true;
}

export default function App() {
  return (
    <ApolloProvider client = {apolloClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarVisible: judgeTabBarVisible(route),
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home'){
                iconName = focused
                  ? 'home'
                  : 'home-outline';
                  return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
              } else if (route.name === 'Chat') {
                iconName = focused
                  ? 'chat-bubble'
                  : 'chat-bubble-outline';
                  return <MaterialIcons name={iconName} size={size} color={color}/>
              } else if (route.name === 'Board') {
                iconName = focused
                  ? 'clipboard'
                  : 'clipboard-outline';
                  return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
              } else if (route.name === 'Profile') {
                iconName = focused
                  ? 'user-circle'
                  : 'user-circle-o';
                  return <FontAwesome name={iconName} size={size} color={color}/>
              }
            }
          })}
          tabBarOptions = {{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray'
          }}
        >
          <Tab.Screen name = 'Home' component = {HomeStack} />
          <Tab.Screen name = 'Chat' component = {ChatStack} />
          <Tab.Screen name = 'Board' component = {BoardStack} />
          <Tab.Screen name = 'Profile' component = {ProfileStack} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
