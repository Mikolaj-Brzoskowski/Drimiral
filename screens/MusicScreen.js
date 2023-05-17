import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow';

export default function Music() {

  return (
    <View className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Music'/>
      <Text className="self-center p-2 w-10/12">Here you can listen to personalised sleeping music.</Text>
    </View>
  )
}