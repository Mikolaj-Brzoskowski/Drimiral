import { View, Text, ScrollView } from 'react-native'
import React, { useRef, useState } from 'react'
import BackArrow from '../components/BackArrow';
import AddNote from '../components/AddNote';
import DeleteNote from '../components/DeleteNote';
import SearchBar from '../components/SearchBar';
import Note from '../components/Note';
import uuid from 'react-native-uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addGoal, editGoal, getGoals, removeGoal } from '../features/goalsSlice';
import CollorButton from '../components/ColorButton';


export default function Music() {

  const [isDeleteButtonActive, setDeleteButtonActive] = useState(false)
  const [isColorButtonActive, setColorButtonActive] = useState(false)
  const dispatch = useDispatch()
  const notes = useSelector(getGoals)
  const [searchQuery, setSearchQuery] = useState('')
  const scrollRef = useRef()

  const onAddBtnClick = () => {
    dispatch(addGoal({title: '', note: '', id: uuid.v4(), date: new Date().toLocaleString('en-US', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }), selectedColor: '#6159E6'}))
    scrollRef.current?.scrollTo({
      y: 0,
      animated: true,
    });
  }

  const saveFunction = (id, title, note, date, selectedColor) => {
    dispatch(editGoal({title: title, note: note, id: id, date: date, selectedColor: selectedColor}))
  }

  const onDelBtnClick = () => {
    setDeleteButtonActive(!isDeleteButtonActive)
  };

  const onColorBtnClick = () => {
    setColorButtonActive(!isColorButtonActive)
  };

  const onDelConfirmButtonClick = (id) => {
    dispatch(removeGoal({id}))
  }

  const searchFliter = (element) => {
    if (element.title.toLowerCase().includes(searchQuery.toLowerCase()) || element.note.toLowerCase().includes(searchQuery.toLowerCase())) {
      return element
    }
  }

  return (
    <ScrollView stickyHeaderIndices={[0]} ref={scrollRef}>
      
    </ScrollView>
      
  )
}