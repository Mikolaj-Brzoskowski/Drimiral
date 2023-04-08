import { View, Text, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import BackArrow from '../components/BackArrow';

export default function Music() {

  return (
    <View className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Music'/>
      <Text className="self-center p-2 w-10/12">Here you can listen to personalised sleeping music.</Text>
    </View>
  )
}