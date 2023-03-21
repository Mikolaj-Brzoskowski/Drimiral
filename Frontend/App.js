import React from 'react';
import NavBar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Journal from './screens/JournalScreen';
import Music from './screens/MusicScreen';
import Stats from './screens/StatsScreen';
import { Provider } from 'react-redux';
import { store } from './store';
import Survey from './screens/SurveyScreen';

const Stack = createNativeStackNavigator();

const App = props => {

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{header: NavBar}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Journal" component={Journal}/>
          <Stack.Screen name="Music" component={Music}/>
          <Stack.Screen name="Stats" component={Stats}/>
          <Stack.Screen name="Survey" component={Survey}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

export default App;