import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import Starting from '../components/Starting'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StartSurv() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-1 flex flex-row flex-wrap">
          <Text className="self-center p-2 w-full text-3xl font-bold text-center text-white">Starting questions</Text>
          <Starting/>
        </View>
      </ScrollView>
    </SafeAreaView>
    
  )
}