import { View, Text, ScrollView, Image } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  return (
    <ScrollView className="pt-2 bg-white h-auto p-1">
      <Text className="text-red-500">Home</Text>
      <View className="flex-column flex-1 justify-center content-between items-center border-solid border-2 border-gray-300 rounded">
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Survey</Text>
        <Image
        source={{uri: 'https://cdn-icons-png.flaticon.com/512/10075/10075503.png'}}
        className=" h-60 w-60"/>
        <Text className="text-base p-1 m-1">Please</Text>
      </View>
    </ScrollView>
  )
}