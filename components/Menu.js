
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Pressable, Text, View, TouchableOpacity } from 'react-native'

export default function Menu({closeMenu}) {

    const navigation = useNavigation()

  return (
    <View className="flex-column items-center absolute w-screen -right-3.5 top-14 bg-black">
        <TouchableOpacity onPress={() => {navigation.navigate('Journal'); closeMenu()}} className="p-2 bg-black w-full">
          <Text className="text-white text-xl text-center">Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Guides'); closeMenu()}} className="p-2 bg-black w-full">
          <Text className="text-white text-xl text-center">Guides</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.navigate('Goals'); closeMenu()}} className="p-2 bg-black w-full">
          <Text className="text-white text-xl text-center">Music</Text>
        </TouchableOpacity>
    </View>
)
}