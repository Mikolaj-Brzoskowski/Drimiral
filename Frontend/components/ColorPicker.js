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
        colors={['#6159E6', '#E65998', '#DEE659', '#59E6A7']}
        title={"Note color:"}
        />
    </View>
  )
}