import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const [data, setData] = useState(' ');
  const navigation: any = useNavigation();

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
      <Image
        style={styles.imagesDefault}
        source={require('../../Assets/img1.png')}
      />
      <Text style={styles.mainText}>Gerador de Piadas do Chuck Norris</Text>
      <TouchableOpacity style={styles.appButton} onPress={storeJokes}>
        <Text style={styles.appButtonText}>Gerar Piada</Text>
      </TouchableOpacity>
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
    fontSize: 20,
    marginTop: 20,
  },
  imagesDefault: {
    width: 320,
    height: 400,
    alignSelf: 'center',
    margin: 15,
  },
  appButton: {
    backgroundColor: 'pink',
    height: 40,
    width: 160,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 15,
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
