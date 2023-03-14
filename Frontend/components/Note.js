import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { CheckIcon, TrashIcon } from 'react-native-heroicons/solid'

export default function Note({title, note, isDeleteButtonActive}) {

  return (
    <View className="flex-column border-t-2 border-gray-300 p-2 w-screen">
        <TextInput 
        placeholder="Title" 
        keyboardType="default" 
        numberOfLines={1} 
        className="font-bold text-2xl" 
        defaultValue={title}/>
        <TextInput 
        placeholder="Type note here..." 
        keyboardType="default" 
        defaultValue={note} 
        multiline={true} 
        className="text-base flex-row w-full bg-gray-100 border-solid border-2 border-[#6159E6] rounded self-center p-1 m-1 mr-3"/>
        <View>
          {isDeleteButtonActive ?
          (<View className="flex-column mr-2 mt-1 justify-center items-center">
          <TouchableOpacity className="bg-[#6159E6] rounded-full p-2">
            <TrashIcon size={30} color='white'/>
          </TouchableOpacity>
          <Text>Confirm Delete</Text>
          </View>
          )
          :
          <View className="flex-column mr-2 mt-1 justify-center items-center">
            <TouchableOpacity className="bg-[#6159E6] rounded-full p-2">
              <CheckIcon size={30} color='white'/>
            </TouchableOpacity>
            <Text>Save Note</Text>
          </View>}
        </View>
    </View>
  )
}