import { View, Text } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow'
import { ScrollView } from 'react-native'
import Starting from '../components/Starting'

export default function StartSurvScreen() {
  return (
    <ScrollView>
      <View className="p-1 bg-white flex flex-row flex-wrap">
        <BackArrow text='Starting'/>
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Initial questions</Text>
        <Starting/>
      </View>
    </ScrollView>
  )
}