import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';

const JokeGenerated = () => {
  const [joke, setJoke] = useState('');
  const navigation: any = useNavigation();

  const getJoke = async () => {
    try {
      const value = await AsyncStorage.getItem('@key');
      setJoke(value);
      console.log(value);
      return value;
    } catch (e) {
      console.error(e);
      console.log('nao pegou');
    }
    console.log('Done.');
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>{joke}</Text>
      <TouchableOpacity
        style={styles.appButton}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.appButtonText}>Voltar e gerar outra piada</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default JokeGenerated;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainText: {
    alignSelf: 'center',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
  appButton: {
    backgroundColor: 'pink',
    height: 40,
    width: 350,
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
