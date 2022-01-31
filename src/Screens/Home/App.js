import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  const [data, setData] = useState(' ');
  const navigation = useNavigation();

  const storeJokes = () => {
    axios.get('https://api.chucknorris.io/jokes/random').then(response => {
      setData(response.data.value);
      try {
        AsyncStorage.setItem('@key', data);
        console.log('salvo');
      } catch (error) {
        console.log('erro');
      }
    });
    navigation.navigate('JokeGenerated');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>Gerador de Piadas do Chuck Norris</Text>
      <Button onPress={storeJokes} title="Gerar Piada" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 15,
  },
});
