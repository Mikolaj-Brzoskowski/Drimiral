import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import { RadioButton } from 'react-native-paper';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'

export default function Daily() {

  const [booleanValue, setBooleanValue] = useState()
  const [booleanValue2, setBooleanValue2] = useState()
  const [dreamResponse, setDreamResponse] = useState('Nie')
  const [rateResponse, setRateResponse] = useState('Nie spałem')

  const navigation = useNavigation()

  return (
    <View>
      <Formik
       initialValues={daily_surv}
       onSubmit={ (values) => {console.log(values); navigation.navigate('Home')}}
     >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="bg-white flex-columns">
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[0].question}`}</Text>
              <View className="flex-row justify-evenly p-3 flex-wrap">
                <View className="flex-row">
                  <RadioButton
                  value='Nie spałem'
                  status={ rateResponse === 'Nie spałem' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Nie spałem')); values[0].answer = 'Nie spałem'}}
                  />
                  <Text className="text-lg m-1">Nie spałem</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Źle'
                  status={ rateResponse === 'Źle' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Źle')); values[0].answer = 'Źle'}}
                  />
                  <Text className="text-lg m-1">Źle</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Średnio'
                  status={ rateResponse === 'Średnio' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Średnio')); values[0].answer = 'Średnio'}}
                  />
                  <Text className="text-lg m-1">Średnio</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Dobrze'
                  status={ rateResponse === 'Dobrze' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Dobrze')); values[0].answer = 'Dobrze'}}
                  />
                  <Text className="text-lg m-1">Dobrze</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Wspaniale'
                  status={ rateResponse === 'Wspaniale' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Wspaniale')); values[0].answer = 'Wspaniale'}}
                  />
                  <Text className="text-lg m-1">Wspaniale</Text>
                </View>
              </View>
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
              <View className="flex-row justify-evenly p-3">
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
            </View >
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
              <View className="flex-row justify-evenly p-3">
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
              <View className="flex-row justify-evenly p-3">
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
            <RadioButtons values={values} idx={7}/>
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