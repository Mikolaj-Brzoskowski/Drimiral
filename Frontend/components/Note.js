import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TrashIcon } from 'react-native-heroicons/solid'
import ColorPicker from './ColorPicker'

export default function Note({id, title, note, date, selectedColor, isDeleteButtonActive, onDelConfirmButtonClick, saveFunction, isColorButtonActive}) {

  const [titleValue, setTitleValue] = useState(title)
  const [noteValue, setNoteValue] = useState(note)
  const [colorValue, setColorValue] = useState(selectedColor)

  useEffect(() => {
    saveFunction(id, titleValue, noteValue, date, colorValue)
  }, [titleValue, noteValue, colorValue]);

  const conditionalRender = () => {
    if (isDeleteButtonActive) {
      return (<View className="flex-column mr-2 mt-1 justify-center items-center">
      <TouchableOpacity className="bg-violet rounded-full p-2" onPress={(e) => onDelConfirmButtonClick(id)}>
        <TrashIcon size={30} color='white'/>
      </TouchableOpacity>
      <Text>Confirm Delete</Text>
      </View>)
    }
    else return null
  }

  return (
    <View className="flex-column border-t-2 border-gray-300 p-2 w-full">
        <TextInput 
        placeholder="Title" 
        keyboardType="default" 
        numberOfLines={1} 
        className="font-bold text-2xl" 
        defaultValue={titleValue}
        onChangeText={setTitleValue}
        />
        <TextInput 
        placeholder="Type note here..." 
        keyboardType="default" 
        defaultValue={noteValue}
        multiline={true} 
        className={`text-base flex-row w-full bg-gray-100 border-solid border-2 rounded self-center p-1 m-1`}
        style={{borderColor: colorValue}}
        onChangeText={setNoteValue}
        />
        <Text className="text-xs">Created: {date}</Text>
        {isColorButtonActive ? <ColorPicker colorValue={colorValue} setColorValue={setColorValue}/> : null}
        <View>
          {conditionalRender()}
        </View>
    </View>
  )
}