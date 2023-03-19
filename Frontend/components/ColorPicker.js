import { View, Text } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-picker/picker';
import { EyeDropperIcon } from 'react-native-heroicons/solid';

export default function ColorPicker({colorValue, setColorValue}) {
  return (
    <View className="flex-1 flex-row justify-end h-9">
      <EyeDropperIcon size={25} color='black'>
      <Picker
        selectedValue={colorValue}
        style={{ height: 100, width: 50 }}
        onValueChange={(itemValue) => setColorValue(itemValue)}
        useNativeAndroidPickerStyle={false}
        >
        <Picker.Item style={{backgroundColor: '#6159E6'}} label="Normal" color='black' value='border-violet' />
        <Picker.Item style={{backgroundColor: '#E65998'}} label="Nightmares" color='black' value='border-pink' />
        <Picker.Item style={{backgroundColor: '#DEE659'}} label="Weird" color='black' value='border-yellow' />
        <Picker.Item style={{backgroundColor: '#59E6A7'}} label="Good ones" color='black' value='border-lime' />
      </Picker>
      </EyeDropperIcon>
    </View>
  )
}