import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, Image, Button, TextInput, View } from 'react-native';
import NavBar from './components/navbar';

const App = props => {

  const [isHungry, setIsHungry] = useState(true);

  return (
    <ScrollView>
      <View style={styles.container}>
        <NavBar/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;