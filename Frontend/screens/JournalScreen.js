import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackArrow from '../components/BackArrow';
import AddNote from '../components/AddNote';
import DeleteNote from '../components/DeleteNote';
import SearchBar from '../components/SearchBar';
import Note from '../components/Note';
import uuid from 'react-native-uuid';
import { addEntry, editEntry, getEntries, removeEntry } from '../features/journalSlice';
import { useDispatch, useSelector } from 'react-redux'


export default function Journal() {

  const [isDeleteButtonActive, setDeleteButtonActive] = useState(false)
  const dispatch = useDispatch()
  const notes = useSelector(getEntries)

  const onAddBtnClick = () => {
    dispatch(addEntry({title: '', note: '', id: uuid.v4()}))
  }

  const onSaveBtnClick = (id, title, note) => {
    dispatch(editEntry({title: title, note: note, id: id}))
  }

  const onDelBtnClick = () => {
    setDeleteButtonActive(!isDeleteButtonActive)
  };

  const onDelConfirmButtonClick = (id) => {
    dispatch(removeEntry({id}))
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