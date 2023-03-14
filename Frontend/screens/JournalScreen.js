import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackArrow from '../components/BackArrow';
import AddNote from '../components/AddNote';
import DeleteNote from '../components/DeleteNote';
import SearchBar from '../components/SearchBar';
import Note from '../components/Note';
import uuid from 'react-native-uuid';


export default function Journal() {

  const [notes, setNotes] = useState([]);
  const [isDeleteButtonActive, setDeleteButtonActive] = useState(false)

  const onAddBtnClick = () => {
    setNotes(notes.concat({title: '', note: '', id: uuid.v4()}));
    //state here
    //addEntry({title: '', note: ''})
  };

  const onSaveBtnClick = (id, title, note) => {
    const notesCopy = [...notes]
    notesCopy[id] = {title: title, note: note, id: id}
    setNotes(notesCopy)
  }

  const onDelBtnClick = () => {
    setDeleteButtonActive(!isDeleteButtonActive)
  };

  const onDelConfirmButtonClick = (id) => {
    const notesCopy = notes.filter( note => note.id !== id)
    setNotes(notesCopy)
  }

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
        {notes.map((note) => (
          <Note id={note.id} key={note.id} 
          title={`${note.title}`} note={`${note.note}`} 
          isDeleteButtonActive={isDeleteButtonActive} 
          onDelConfirmButtonClick={onDelConfirmButtonClick} 
          onSaveBtnClick={onSaveBtnClick}/>
        ))}
      </View>
    </ScrollView>
      
  )
}