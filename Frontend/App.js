import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import NavBar from './components/navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

const App = props => {

  const [isHungry, setIsHungry] = useState(true);

  return (
    <NavigationContainer>
      <NavBar/>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;