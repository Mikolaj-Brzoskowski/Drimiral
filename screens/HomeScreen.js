import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { resetUserState, lastDailyDate } from '../features/userSlice'
import { resetJournalState } from '../features/journalSlice'
import { Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';


export default function Home() {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const isDailyAvailable = () =>{
    const lastDate = useSelector(lastDailyDate)
    let days = moment().diff(lastDate, 'days');
    if(days >= 1) {
      return (
        <View className="border-solid border-2 border-gray-300 rounded">
        <TouchableOpacity onPress={() => navigation.navigate('Survey')} className="m-2 h-100 w-100 flex-column flex-1 justify-center content-between items-center">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Survey</Text>
          <Image
          source={require('../assets/daily.png')}
          className=" h-60 w-60"/>
          <Text className="text-base p-1 m-1">Please take a minute to answer daily questions about your sleep.</Text>
        </TouchableOpacity>
      </View>
      )
    }
    else return (
      <View className="border-solid border-2 border-gray-300 rounded m-2 h-100 w-100 flex-column flex-1 justify-center content-between items-center">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Survey Completed!</Text>
          <Image
          source={require('../assets/check.png')}
          style={{resizeMode: 'contain',
          height: 150,
          width: 150}}
          className=" h-60 w-60"/>
          <Text className="text-base p-1 m-1">You completed daily survey. Thank you!!! Next one will be available tomorrow. </Text>
      </View>
    );
  }

  return (
    <ScrollView className="pt-2 bg-white p-1">
      <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Homepage</Text>
      {isDailyAvailable()}
      {/* buttons for development only */}
      {/* <View className="flex-row justify-between mt-2">
        <Button title="Reset user State" onPress={(e) => dispatch(resetUserState())}/>
        <Button title="Reset journal State" onPress={(e) => dispatch(resetJournalState())}/>
      </View> */}
    </ScrollView>
  )
}