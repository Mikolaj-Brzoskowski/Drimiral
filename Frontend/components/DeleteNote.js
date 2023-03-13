import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TrashIcon } from 'react-native-heroicons/solid'

export default function DeleteNote() {
  return (
    <View>
        <View className="p-3 pb-0">
            <TouchableOpacity className="bg-black rounded-full p-2 self-center">
                <TrashIcon size={30} color='white'/>
            </TouchableOpacity>
        </View>
        <View className="ml-2 mr-2">
            <Text>Delete note</Text>
        </View>
    </View>
  )
}