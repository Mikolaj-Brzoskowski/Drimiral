import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackArrow from '../components/BackArrow';


export default function Stats() {

  return (
    <View className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Stats'/>
      <Text className="self-center p-2 w-10/12">Here you can see your sleeping stats from Google Fit/Smartwatch Device.</Text>
    </View>
  )
}