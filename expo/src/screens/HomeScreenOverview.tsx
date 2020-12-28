import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import { useHomeInfo } from '../hooks/useHomeInfo';
import Loading from '../components/common/Loading';


const HomeScreen = () => {
  const HomeData = useHomeInfo();
  if (!HomeData) return <Loading />;
  const { profs } = HomeData;
  return (
    <ScrollView style={{ flex: 1 }}>
      {profs.map((profile, index) => 
        <Card 
          key={index}
          image={require('../../assets/default.jpg')}
        >
          <Text style={{ marginBottom: 10 }}>{profile.userName}</Text>
          <Text style={{ marginBottom: 10 }}>{profile.prof}</Text>
        </Card>
      )}
    </ScrollView>
  );
};

export default HomeScreen;
