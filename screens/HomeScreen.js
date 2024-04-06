import { View, Text, ScrollView, Image, TouchableOpacity, useWindowDimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { lastDailyDate } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment';
import HomeGrid from '../components/HomeGrid'


export default function Home() {

  const navigation = useNavigation()

  const isDailyAvailable = () =>{
    const lastDate = useSelector(lastDailyDate)
    let days = moment().diff(lastDate, 'days');
    if(days >= 1) {
      return (
        <HomeGrid name='Survey' path={require('../assets/survey.png')} text="Please take a minute to answer daily questions about your sleep."/>
      )
    }
    else return (
      <View className="border-solid border-2 border-violet rounded m-3 h-100 w-100 flex-column flex-1 justify-center content-between items-center">
          <Text className="self-center p-2 w-10/12 text-3xl font-bold font-roboto text-center text-white">Survey Completed!</Text>
          <Image
          source={require('../assets/check.png')}
          style={{resizeMode: 'contain',
          height: 150,
          width: 150}}
          className=" h-60 w-60"/>
          <Text className="text-base text-center p-1 m-1 text-white">You completed daily survey. Thank you!!! Next one will be available tomorrow. </Text>
      </View>
    );
  }

  return (
    <ScrollView className="pt-2 p-1">
      {isDailyAvailable()}
      <HomeGrid name='Journal' path={require('../assets/journal.png')} text="Go to journal page, where you can write about your dreams."/>
      <HomeGrid name='Guides' path={require('../assets/guides.png')} text="Don't know how to have a good sleep? Check this guides with several tips & tricks and sleep techniques."/>
      <HomeGrid name='Music' path={require('../assets/music.png')} text="Listen to some sleepy and dreamy music!"/>
    </ScrollView>
  )
}