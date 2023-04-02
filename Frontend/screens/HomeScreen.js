import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {

  const navigation = useNavigation()

  return (
    <ScrollView className="pt-2 bg-white h-auto p-1">
      <Text className="text-red-500">Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Survey')}>
        <View className="flex-column flex-1 justify-center content-between items-center border-solid border-2 border-gray-300 rounded">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Survey</Text>
          <Image
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/10075/10075503.png'}}
          className=" h-60 w-60"/>
          <Text className="text-base p-1 m-1">Please take a minute to answer questions about your sleep.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}