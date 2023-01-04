import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {MOCKCREW, MOCKCREWS} from '../../../mocks/crew';

const Home = () => {
  const [crew, setCrew] = useState(MOCKCREWS);
  return (
    <SafeAreaView>
      <FlatList data={crew} renderItem={({item}) => <View><Text>{item.CrewName}</Text></View>} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
