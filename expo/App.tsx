import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons,MaterialIcons,FontAwesome } from '@expo/vector-icons'
import { ApolloProvider } from '@apollo/client'

import HomeScreen from './src/screens/HomeScreenOverview'
import ChatScreen from './src/screens/ChatScreenOverview'
import BoardScreen from './src/screens/BoardScreenOverview'
import ProfileScreen from './src/screens/ProfileScreenOverview'
import { apolloClient } from './src/lib/apolloClient'



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <ApolloProvider client = {apolloClient}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
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
          <Tab.Screen name = 'Home' component = {HomeScreen} />
          <Tab.Screen name = 'Chat' component = {ChatScreen} />
          <Tab.Screen name = 'Board' component = {BoardScreen} />
          <Tab.Screen name = 'Profile' component = {ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
