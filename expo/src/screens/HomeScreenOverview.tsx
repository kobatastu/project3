import React from 'react'
import { Text, View} from 'react-native';

import { useHomeInfo } from '../hooks/useHomeInfo';
import Loading from '../components/common/Loading'



const HomeScreen = () => {
  const HomeData = useHomeInfo();
  if (!HomeData) return <Loading />
  const { comments } = HomeData as any
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text>HomeScreen</Text>
      {comments.map((com,index) => 
        <Text>{com.comment}</Text>
      )}
    </View>
  )
}

export default HomeScreen;