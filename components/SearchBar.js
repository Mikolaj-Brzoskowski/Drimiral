import { View, TextInput } from 'react-native'
import React from 'react'
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/solid'
 
export default function SearchBar({searchQuery, setSearchQuery}) {
  return (
    <View className="flex-row items-center flex-1 my-3 border-solid border-2 border-gray-100 rounded space-x-2 h-10 self-center">
        <MagnifyingGlassIcon size={30} color='white'></MagnifyingGlassIcon>
        <TextInput placeholderTextColor="white" color="white" placeholder="Search..." keyboardType="default" numberOfLines={1} className="flex-1" defaultValue={searchQuery} onChangeText={setSearchQuery}/>
        {searchQuery === '' ? null : <XMarkIcon size={25} color='black' onPress={(e) => setSearchQuery('')}/>}
    </View>
  )
}