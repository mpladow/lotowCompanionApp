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
import {STANDARD_PADDING} from '../../constants/constants';
import {Button} from 'react-native-paper';

const Home = () => {
  const [crew, setCrew] = useState(MOCKCREWS);

  const handleAddPosse = () => {
    console.log('add new posse');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexGrow: 1,
        padding: 20,
      }}>
      <View style={{flex: 1, padding: STANDARD_PADDING}}>
        <FlatList
          data={crew}
          contentContainerStyle={{flexGrow: 1}}
          renderItem={({item}) => (
            <View>
              <Text>{item.CrewName}</Text>
            </View>
          )}
        />
        <View>
          <Button onPress={() => handleAddPosse()}>Add Posse</Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
