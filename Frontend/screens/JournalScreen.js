import { View, Text } from 'react-native'
import React from 'react'

import BackArrow from '../components/BackArrow';

export default function Journal() {

  return (
    <View className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Journal'/>
      <Text className="self-center p-2 w-10/12">Here you can add your notes about your dreams.</Text>
    </View>
  )
}