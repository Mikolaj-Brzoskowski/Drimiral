import { View, Text, Button, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import { RadioButton } from 'react-native-paper';
import Slider from "react-native-a11y-slider";

export default function Questions() {

  const [dreamResponse, setDreamResponse] = useState('')

  return (
    <View>
      <Formik
       initialValues={{questions: daily_surv}}
       onSubmit={ (values) => {console.log(values)}}
     >
       {(props) => (
        <View className="bg-white flex-columns">
          {daily_surv.map((el, idx) => (
            <View className="border-t-2 border-gray-300 w-full mt-2" key={idx}>
              <Text className="font-bold text-2xl text-center mt-2">{`${el.question}`}</Text>
              {(props.values.questions[idx].type === 'text') && (
                <TextInput
                onChangeText={props.handleChange(`questions[${idx}].answer`)}
                value={props.values.questions[idx].answer}
                className="border rounded-full p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                />
              )}
              {(props.values.questions[idx].type === 'boolean') && (
              <View>
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !props.values.questions[idx].answer ? 'checked' : 'unchecked' }
                  onPress={() => (props.values.questions[idx].answer = false)}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value={true}
                  status={ props.values.questions[idx].answer ? 'checked' : 'unchecked' }
                  onPress={() => (props.values.questions[idx].answer = true)}
                  />
                  <Text className="text-lg m-1">Tak</Text>
                </View>
              </View>
              )}
              {(props.values.questions[idx].type === 'range') && (
                <Slider min={1} max={6} values={[1]} className='p-5'/>
              )}
              {(props.values.questions[idx].type === 'number') && (
                <TextInput
                onChangeText={props.handleChange(`questions[${idx}].answer`)}
                value={props.values.questions[idx].answer}
                className="border rounded-full p-2 m-2 text-lg"
                inputMode='numeric'
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                />
              )}
              {(props.values.questions[idx].type === 'dream_type') && (
                <View>
                <View className="flex-row">
                  <RadioButton
                  value='Sny'
                  status={ dreamResponse === 'Sny' ? 'checked' : 'unchecked' }
                  onPress={() => (setDreamResponse('Sny'))}
                  />
                  <Text className="text-lg m-1">Sny</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Koszmary'
                  status={ dreamResponse === 'Koszmary' ? 'checked' : 'unchecked' }
                  onPress={() => (setDreamResponse('Koszmary'))}
                  />
                  <Text className="text-lg m-1">Koszmary</Text>
                </View>
              </View>
              )}
            </View>
          ))}
          <View className="m-5 flex-row justify-center">
            <Button title="Submit survey" onPress={props.handleSubmit}/>
          </View>
        </View>
       )}
     </Formik>
    </View>
  )
}