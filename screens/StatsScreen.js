import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import BackArrow from '../components/BackArrow';


export default function Stats() {

  return (
    <View className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Stats'/>
      <Text className="self-center p-2 w-10/12">Here you can see your sleeping stats from Google Fit/Smartwatch Device.</Text>
    </View>
  )
}