import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const color = '#f06795'

const NavBar = () => {
    return(
        <View style={styles.container}>
            <Image
            source={require('../assets/drimiral.png')}
            style={{width: 50, height: 50}}
            />
            <Text className="text-white">Journal</Text>
            <Text className="text-white">Music</Text>
            <Text className="text-white">Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      padding: 5,
      backgroundColor: "black",
      alignContent: "flex-start",
      marginTop: 35,
      paddingRight: 100
    },
  });

export default NavBar;