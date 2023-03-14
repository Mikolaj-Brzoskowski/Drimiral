import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackArrow from '../components/BackArrow';
import AddNote from '../components/AddNote';
import DeleteNote from '../components/DeleteNote';
import SearchBar from '../components/SearchBar';
import Note from '../components/Note';
import { addEntry } from '../features/journalSlice';

export default function Journal() {

  const [notes, setNotes] = useState([]);
  const [isDeleteButtonActive, setDeleteButtonActive] = useState(false)

  const onAddBtnClick = event => {
    setNotes(notes.concat({title: '', note: ''}));
    addEntry({title: '', note: ''})
  };

  const onDelBtnClick = () => {
    setDeleteButtonActive(!isDeleteButtonActive)
  };

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View className="p-1 bg-white flex flex-row flex-wrap">
        <BackArrow text='Journal'/>
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Dream Dairy</Text>
        <View className="w-screen p-1 bg-white flex flex-row justify-end">
          <SearchBar/>
          <AddNote onAddBtnClick={onAddBtnClick} />
          <DeleteNote onDelBtnClick={onDelBtnClick} isDeleteButtonActive={isDeleteButtonActive}/>
        </View>
      </View>
      <View className="bg-white">
        {notes.map((note, idx) => (
          <Note key={idx} title={`${note.title}`} note={`${note.note}`} isDeleteButtonActive={isDeleteButtonActive}/>
        ))}
      </View>
    </ScrollView>
      
  )
}