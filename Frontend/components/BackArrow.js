import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function BackArrow({text}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={navigation.goBack}
        className="bg-black rounded-b-full p-2 flex items-center">
        <Text className="text-xs text-white">{text}</Text>
        <ArrowLeftIcon size={30} color='white'/>
    </TouchableOpacity>
  )
}