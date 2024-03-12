import React from 'react';
import NavBar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Journal from './screens/JournalScreen';
import Music from './screens/MusicScreen';
import Survey from './screens/SurveyScreen';
import StartSurv from './screens/StartSurvScreen';
import { useSelector } from 'react-redux'
import { isStartAvailable } from './features/userSlice'
import Welcome from './screens/WelcomeScreen';
import Guides from './screens/GuidesScreen';
import { DefaultTheme, DarkTheme } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const Navigation = props => {

  const MyTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#6159E6',
      text: '#FFFFFF',
    },
  };

  const networkStatus = async () => {
    await Network.getNetworkStateAsync().isConnected;
  }

  return (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{header: ({}) => <NavBar/>}}>
        {useSelector(isStartAvailable) && 
        (<Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>)}
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Journal" component={Journal}/>
            <Stack.Screen name="Guides" component={Guides}/>
            <Stack.Screen name="Music" component={Music}/>
            <Stack.Screen name="Survey" component={Survey}/>
            <Stack.Screen name="Start" component={StartSurv} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;