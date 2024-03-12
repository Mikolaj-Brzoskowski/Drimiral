import { View } from 'react-native'
import React from 'react'
import { EyeDropperIcon } from 'react-native-heroicons/solid';
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
          <View/>}
        />
    </View>
  )
}