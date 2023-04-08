import React from 'react';
import NavBar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/HomeScreen';
import Journal from './screens/JournalScreen';
import Music from './screens/MusicScreen';
import Stats from './screens/StatsScreen';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import Survey from './screens/SurveyScreen';
import StartSurvScreen from './screens/StartSurvScreen';
import { PersistGate } from 'redux-persist/integration/react'

const Stack = createNativeStackNavigator();

const App = props => {

  return (
    <NavigationContainer>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stack.Navigator screenOptions={{header: NavBar}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Journal" component={Journal}/>
          <Stack.Screen name="Music" component={Music}/>
          <Stack.Screen name="Stats" component={Stats}/>
          <Stack.Screen name="Survey" component={Survey}/>
          <Stack.Screen name="Start" component={StartSurvScreen}/>
        </Stack.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;