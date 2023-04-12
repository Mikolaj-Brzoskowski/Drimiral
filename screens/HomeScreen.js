import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { isStartAvailable, resetUserState } from '../features/userSlice'
import { resetJournalState } from '../features/journalSlice'
import { Button } from 'react-native'
import { useDispatch } from 'react-redux'

export default function Home() {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const days = (date_1, date_2) =>{
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }

  return (
    <ScrollView className="pt-2 bg-white p-1">
      <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Homepage</Text>
      <View className="border-solid border-2 border-gray-300 rounded">
        <TouchableOpacity onPress={() => navigation.navigate('Survey')} className="m-2 h-100 w-100 flex-column flex-1 justify-center content-between items-center">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Survey</Text>
          <Image
          source={{uri: 'https://cdn-icons-png.flaticon.com/512/10075/10075503.png'}}
          className=" h-60 w-60"/>
          <Text className="text-base p-1 m-1">Please take a minute to answer daily questions about your sleep.</Text>
        </TouchableOpacity>
      </View>
      {/* buttons for development only */}
      <View className="flex-row justify-between mt-2">
        <Button title="Reset user State" onPress={(e) => dispatch(resetUserState())}/>
        <Button title="Reset journal State" onPress={(e) => dispatch(resetJournalState())}/>
      </View>
    </ScrollView>
  )
}