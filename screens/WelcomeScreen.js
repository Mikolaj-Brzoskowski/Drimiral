import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Welcome() {

    const navigation = useNavigation()

  return (
    <SafeAreaView className="bg-white">
      <View className="p-1 bg-white flex flex-row flex-wrap grow h-full w-full justify-center">
        <Image
          style={{resizeMode: 'contain',
          height: 300,
          width: 300}}
          source={require('../assets/welcome.gif')} />
        <Text className="text-xl flex-row p-3 mb-3">Hello, welcome to my Drimiral app! Before we get started, you need to answer for several questions.</Text>
        <TouchableOpacity className="p-3 align-middle justify-center rounded-full bg-violet" onPress={() => navigation.navigate("Start")}>
            <Text className="text-xl flex-row p-2 text-white">Start the survey</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}