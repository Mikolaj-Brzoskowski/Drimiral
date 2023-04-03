import { View, Text, Button, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import { RadioButton } from 'react-native-paper';
import Slider from "react-native-a11y-slider";

export default function Questions() {

  const [booleanValue, setBooleanValue] = useState()
  const [booleanValue2, setBooleanValue2] = useState()
  const [booleanValue3, setBooleanValue3] = useState()
  const [dreamResponse, setDreamResponse] = useState('')

  return (
    <View>
      <Formik
       initialValues={daily_surv}
       onSubmit={ (values) => {console.log(values)}}
     >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="bg-white flex-columns">
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[0].question}`}</Text>
              <Slider min={1} max={6} values={[values[0].answer]} className='p-5' onChange={(value) => values[0].answer = value[0]}/>
            </View>
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[1].question}`}</Text>
              <TextInput onChangeText={handleChange(`${1}.answer`)} 
              onBlur={handleBlur(`${1}.answer`)} value={values[1].answer} 
              className="border rounded p-2 m-2 text-lg"
              inputMode='numeric' 
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'/>
            </View>
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[2].question}`}</Text>
              <View>
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !booleanValue ? 'checked' : 'unchecked' }
                  onPress={() => {(setBooleanValue(false)); values[2].answer = false}}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                    value={true}
                    status={ booleanValue ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue(true)); values[2].answer = true}}
                    />
                  <Text className="text-lg m-1">Tak</Text>
                </View>
              </View>
            </View>
            {(values[2].answer !== false) && (
              <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[3].question}`}</Text>
              <TextInput 
              onChangeText={handleChange(`${3}.answer`)} 
              onBlur={handleBlur(`${3}.answer`)} 
              value={values[3].answer} className="border rounded p-2 m-2 text-lg"
              inputMode='numeric' 
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'/>
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[4].question}`}</Text>
              <View>
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !booleanValue2 ? 'checked' : 'unchecked' }
                  onPress={() => {(setBooleanValue2(false)); values[4].answer = false}}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                    value={true}
                    status={ booleanValue2 ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue2(true)); values[4].answer = true}}
                    />
                  <Text className="text-lg m-1">Tak</Text>
                </View>
              </View>
            </View>
            {(values[4].answer !== false) && (
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[5].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${5}.answer`)}
                onBlur={handleBlur(`${5}.answer`)}
                value={values[5].answer}
                className="border rounded p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                />
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[6].question}`}</Text>
              <View>
                <View className="flex-row">
                  <RadioButton
                  value='Nie'
                  status={ dreamResponse === 'Nie' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Nie')); values[6].answer = 'Nie'}}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Sny'
                  status={ dreamResponse === 'Sny' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Sny')); values[6].answer = 'Sny'}}
                  />
                  <Text className="text-lg m-1">Sny</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Koszmary'
                  status={ dreamResponse === 'Koszmary' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Koszmary')); values[6].answer = 'Koszmary'}}
                  />
                  <Text className="text-lg m-1">Koszmary</Text>
                </View>
              </View>
            </View>
            {(values[6].answer !== 'Nie') && (
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[7].question}`}</Text>
              <View>
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !booleanValue3 ? 'checked' : 'unchecked' }
                  onPress={() => {(setBooleanValue3(false)); values[7].answer = false}}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                    value={true}
                    status={ booleanValue3 ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue3(true)); values[7].answer = true}}
                    />
                  <Text className="text-lg m-1">Tak</Text>
                </View>
              </View>
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[8].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${8}.answer`)}
                onBlur={handleBlur(`${8}.answer`)}
                value={values[8].answer}
                className="border rounded p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                />
            </View>
            <View className="m-5 flex-row justify-center">
              <Button title="Submit survey" onPress={handleSubmit}/>
            </View>
        </View>
      )}
     </Formik>
    </View>
  )
}