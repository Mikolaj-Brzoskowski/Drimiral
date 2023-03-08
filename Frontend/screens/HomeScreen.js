import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {

  return (
    <View className="pt-2 bg-white h-auto">
      <Text className="text-red-500">Home</Text>
    </View>
  )
}