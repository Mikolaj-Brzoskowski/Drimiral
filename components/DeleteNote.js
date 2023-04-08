import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { XMarkIcon } from 'react-native-heroicons/solid'

export default function DeleteNote({onDelBtnClick, isDeleteButtonActive}) {

  return (
    <View>
        <View className="p-3 pb-0">
            <TouchableOpacity 
            className={`rounded-full p-2 self-center ${isDeleteButtonActive ? 'bg-violet' : 'bg-black'}`}
            onPress={onDelBtnClick}>
                <XMarkIcon size={30} color='white'/>
            </TouchableOpacity>
        </View>
        <View className="ml-2 mr-2">
            <Text>Delete Note</Text>
        </View>
    </View>
  )
}