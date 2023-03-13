import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import BackArrow from '../components/BackArrow';
import AddNote from '../components/AddNote';
import DeleteNote from '../components/DeleteNote';
import SearchBar from '../components/SearchBar';
import Note from '../components/Note';

export default function Journal() {

  const [inputList, setInputList] = useState([]);

  return (
    <ScrollView>
      <View className="p-1 bg-white flex flex-row flex-wrap">
        <BackArrow text='Journal'/>
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Dream Dairy</Text>
        <View className="w-screen p-1 bg-white flex flex-row justify-end">
          <SearchBar/>
          <AddNote onAddClick={setInputList} inputList={inputList}/>
          <DeleteNote/>
        </View>
        <View className="bg-white flex-row flex-wrap mt-1">
          {inputList}
        </View>
      </View>
    </ScrollView>

  )
}