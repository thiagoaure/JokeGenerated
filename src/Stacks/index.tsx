import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import App from '../Screens/Home/App';
import JokeGenerated from '../Screens/JokeGenerated';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="JokeGenerated" component={JokeGenerated} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
