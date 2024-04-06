import { View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function HomeGrid({name, path, text}) {

  const navigation = useNavigation()
  
  return (
    <View className="border-solid border-2 border-violet rounded m-3">
        <TouchableOpacity onPress={() => navigation.navigate(`${name}`)} className="m-2 h-100 w-100 flex-column flex-1 justify-center content-between items-center">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center text-white">{name}</Text>
          <Image
          source={path}
          className=" h-60 w-60"/>
          <Text className="text-base text-center p-1 m-1 text-white">{text}</Text>
        </TouchableOpacity>
      </View>
  )
}