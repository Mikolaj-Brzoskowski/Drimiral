import { View, Text } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow'
import { daily_surv } from '../data/survey'
import Question from '../components/Question'
import { ScrollView } from 'react-native'

export default function Survey() {
  return (
    <ScrollView className="p-1 bg-white flex flex-row flex-wrap">
      <BackArrow text='Survey'/>
      <Text className="self-center p-2 w-10/12 text-3xl font-bold text-center">Daily Survey</Text>
      <View className="bg-white flex-column">
        {daily_surv.map((el, idx) => (
          <Question question={el.question} type={el.type} key={idx}/>
        ))}
      </View>
    </ScrollView>
  )
}