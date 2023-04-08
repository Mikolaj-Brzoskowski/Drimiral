import { View, Text } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow'
import Daily from '../components/Daily'
import { ScrollView } from 'react-native'


export default function Survey() {
  return (
    <ScrollView>
      <View className="p-1 bg-white flex flex-row flex-wrap">
        <BackArrow text='Journal'/>
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Daily Survey</Text>
        <Daily/>
      </View>
    </ScrollView>
  )
}