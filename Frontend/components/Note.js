import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Note() {
  return (
    <View className="flex-column border-t-2 border-gray-300 p-2 w-screen">
        <TextInput placeholder="Title" keyboardType="default" numberOfLines={1} className="font-bold text-2xl"/>
        <TextInput placeholder="Type note here..." keyboardType="default" multiline={true} className="text-base flex-row w-full bg-gray-100 border-solid border-2 border-blue-300 rounded self-center p-1 m-1 mr-3"/>
    </View>
  )
}