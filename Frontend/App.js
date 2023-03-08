import React from 'react';
import NavBar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Journal from './screens/JournalScreen';
import Music from './screens/MusicScreen';
import Stats from './screens/StatsScreen';

const Stack = createNativeStackNavigator();

const App = props => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{header: NavBar}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Journal" component={Journal}/>
        <Stack.Screen name="Music" component={Music}/>
        <Stack.Screen name="Stats" component={Stats}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;