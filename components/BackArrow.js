import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function BackArrow({text}) {

  const navigation = useNavigation();

  return (
    <TouchableOpacity
        onPress={() => navigation.navigate('Drimiral')}
        className="bg-violet rounded-full p-2 flex items-center self-center">
        <ArrowLeftIcon size={30} color='white'/>
    </TouchableOpacity>
  )
}