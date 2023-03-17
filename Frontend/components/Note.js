import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CheckIcon, TrashIcon } from 'react-native-heroicons/solid'

export default function Note({id, title, note, date, isDeleteButtonActive, onDelConfirmButtonClick, onSaveBtnClick}) {

  const [titleValue, setTitleValue] = useState(title)
  const [noteValue, setNoteValue] = useState(note)
  const [valChanged, setValChanges] = useState(false)

  const conditionalRender = () => {
    if (isDeleteButtonActive) {
      return (<View className="flex-column mr-2 mt-1 justify-center items-center">
      <TouchableOpacity className="bg-[#6159E6] rounded-full p-2" onPress={(e) => onDelConfirmButtonClick(id)}>
        <TrashIcon size={30} color='white'/>
      </TouchableOpacity>
      <Text>Confirm Delete</Text>
      </View>)
    }
    else if (valChanged) {
      return (<View className="flex-column mr-2 mt-1 justify-center items-center">
      <TouchableOpacity className="bg-[#6159E6] rounded-full p-2" onPress={(e) => {onSaveBtnClick(id, titleValue, noteValue, date); setValChanges(false)}}>
        <CheckIcon size={30} color='white'/>
      </TouchableOpacity>
      <Text>Save Note</Text>
      </View>)
    }
    else return null
  }

  return (
    <View className="flex-column border-t-2 border-gray-300 p-2 w-screen">
        <TextInput 
        placeholder="Title" 
        keyboardType="default" 
        numberOfLines={1} 
        className="font-bold text-2xl" 
        defaultValue={titleValue}
        onChangeText={setTitleValue}
        onChange={(e) => setValChanges(true)}
        />
        <TextInput 
        placeholder="Type note here..." 
        keyboardType="default" 
        defaultValue={noteValue}
        multiline={true} 
        className="text-base flex-row w-full bg-gray-100 border-solid border-2 border-[#6159E6] rounded self-center p-1 m-1 mr-3"
        onChangeText={setNoteValue}
        onChange={(e) => setValChanges(true)}
        />
        <Text className="text-xs">Created: {date}</Text>
        <View>
          {conditionalRender()}
        </View>
    </View>
  )
}