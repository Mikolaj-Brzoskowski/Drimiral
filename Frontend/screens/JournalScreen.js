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
  const [searchQuery, setSearchQuery] = useState('')

  const onAddBtnClick = () => {
    dispatch(addEntry({title: '', note: '', id: uuid.v4(), date: new Date().toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }), selectedColor: 'border-violet'}))
  }

  const saveFunction = (id, title, note, date, selectedColor) => {
    dispatch(editEntry({title: title, note: note, id: id, date: date, selectedColor: selectedColor}))
  }

  const onDelBtnClick = () => {
    setDeleteButtonActive(!isDeleteButtonActive)
  };

  const onDelConfirmButtonClick = (id) => {
    dispatch(removeEntry({id}))
  }

  const searchFliter = (element) => {
    if (element.title.toLowerCase().includes(searchQuery.toLowerCase()) || element.note.toLowerCase().includes(searchQuery.toLowerCase())) {
      return element
    }
  }

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <View className="p-1 bg-white flex flex-row flex-wrap">
        <BackArrow text='Journal'/>
        <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Dream Dairy</Text>
        <View className="w-screen p-1 bg-white flex flex-row justify-end">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <AddNote onAddBtnClick={onAddBtnClick} />
          <DeleteNote onDelBtnClick={onDelBtnClick} isDeleteButtonActive={isDeleteButtonActive}/>
        </View>
      </View>
      <View className="bg-white">
        {notes.filter(searchFliter).map((note) => (
          <Note id={note.id} key={note.id} 
          title={`${note.title}`} note={`${note.note}`} date={`${note.date}`} selectedColor={`${note.selectedColor}`}
          isDeleteButtonActive={isDeleteButtonActive} 
          onDelConfirmButtonClick={onDelConfirmButtonClick} 
          saveFunction={saveFunction}
          />
        ))}
      </View>
    </ScrollView>
      
  )
}