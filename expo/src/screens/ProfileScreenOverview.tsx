import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import { useProfInfo } from '../hooks/useProfInfo'
import Loading from '../components/common/Loading'

const ProfileScreen = () => {
  const ProfData = useProfInfo();
  if (!ProfData) return <Loading />
  const { prof } = ProfData as any

  return (
    <View >
      <Image style={styles.header} source={require(`../../assets/default.jpg`)}/>
      <Image style={styles.avatar} source={require(`../../assets/myProf.jpg`)}/>
      <View style={styles.body}>
        <Text style={styles.name}>{prof.userName}</Text>
        <Text style={styles.info}>{prof.prof}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height:200,
  },
  avatar:{
    width:130,
    height:130,
    borderRadius:63,
    borderWidth:4,
    borderColor:'white',
    marginBottom:10,
    alignSelf:'center',
    position:'absolute',
    marginTop:130
  },
  body:{
    marginTop:40,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "black",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "black",
    marginTop:10
  }
})

export default ProfileScreen;
