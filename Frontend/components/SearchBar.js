import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon } from 'react-native-heroicons/solid'
 
export default function SearchBar() {
  return (
    <View className="flex-row items-center flex-1 bg-gray-100 border-solid border-2 border-gray-100 rounded space-x-2 h-10 self-center">
        <MagnifyingGlassIcon size={30} color='black'></MagnifyingGlassIcon>
        <TextInput placeholder="Search..." keyboardType="default" numberOfLines={1} className="flex-1"/>
    </View>
  )
}