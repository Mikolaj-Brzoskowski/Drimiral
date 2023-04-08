import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { EyeDropperIcon } from 'react-native-heroicons/solid';

export default function CollorButton({onColorBtnClick, isColorButtonActive}) {

  return (
    <View>
        <View className="p-3 pb-0">
            <TouchableOpacity 
            className={`rounded-full p-2 self-center ${isColorButtonActive ? 'bg-violet' : 'bg-black'}`}
            onPress={onColorBtnClick}>
                <EyeDropperIcon size={30} color='white'/>
            </TouchableOpacity>
        </View>
        <View className="ml-2 mr-2">
            <Text>Notes Color</Text>
        </View>
    </View>
  )
}