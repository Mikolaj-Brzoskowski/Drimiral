import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation} from '@react-navigation/native'

export default function NavBar() {

    const navigation = useNavigation()

    return(
      <SafeAreaView className="bg-white">
        <StatusBar
        animated={true}
        backgroundColor="#0F0F0F"
        barStyle='light-content'
      />
        <View className="flex flex-row h-15 justify-between p-1.5 items-center bg-black pr-5 border-2 border-white-500">
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Image
          source={require('../assets/drimiral.png')}
          className="h-14 w-14 p-4 rounded-full"
          />
        </TouchableWithoutFeedback>
        <Text id="Journal" className="text-white text-xl" onPress={() => navigation.navigate('Journal')}>Journal</Text>
        <Text id="Music" className="text-white text-xl" onPress={() => navigation.navigate('Music')}>Music</Text>
        <Text id="Stats" className="text-white text-xl" onPress={() => navigation.navigate('Stats')}>Stats</Text>
        </View>
      </SafeAreaView>
    )
}