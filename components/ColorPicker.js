import { View, Text } from 'react-native'
import React from 'react'
import { CheckIcon } from 'react-native-heroicons/solid';
import ColorPalette from 'react-native-color-palette'

export default function ColorPicker({colorValue, setColorValue}) {
  
  return (
    <View>
      <ColorPalette
        onChange={color => setColorValue(color)}
        defaultColor={'#6159E6'}
        value={colorValue}
        colors={['#6159E6', '#FFD447', '#BA2D0B', '#70EE9C', '#E15A97']}
        title={"Note color:"}
        titleStyles={{
          color:`white`
        }}
        icon={
          <CheckIcon size={25}  color={`black`}/>}
        />
        <View className="flex flex-row justify-around">
          <Text className="text-white"> Resting</Text>
          <Text className="text-white"> Active</Text>
          <Text className="text-white">Nightmare</Text>
          <Text className="text-white">Lucid   </Text>
          <Text className="text-white">Others </Text>
        </View>
    </View>
  )
}