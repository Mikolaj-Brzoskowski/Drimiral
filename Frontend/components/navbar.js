import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

const color = '#f06795'

const NavBar = () => {
    return(
        <View style={styles.container}>
            <Image
            source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
            }}
            style={{width: 50, height: 50}}
            />
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      height: 60,
      flexDirection: "row",
      justifyContent: "space-evenly",
      padding: 15,
      backgroundColor: "black",
      alignContent: "flex-start"
    },
    text: {
        color: 'white',
        fontSize: 20
    }
  });

export default NavBar;