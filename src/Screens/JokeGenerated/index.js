import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {Text, Button, SafeAreaView, StyleSheet} from 'react-native';

const JokeGenerated = () => {
  const [joke, setJoke] = useState('');
  const navigation = useNavigation();

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
      <Button
        title="Voltar e gerar outra piada"
        onPress={() => navigation.navigate('Home')}
      />
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
});
