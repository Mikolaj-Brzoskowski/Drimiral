import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import { RadioButton } from 'react-native-paper';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'
import { setDailyDate } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import {DAILY_URL} from '@env'

export default function Daily() {

  const [booleanValue, setBooleanValue] = useState()
  const [booleanValue2, setBooleanValue2] = useState()
  const [dreamResponse, setDreamResponse] = useState('Nie')
  const [rateResponse, setRateResponse] = useState('Nie spałem')
  const [volResponnse, setVolResponnse] = useState('Cicho')
  const [email, setEmail] = useState()

  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <View>
      <Formik
       initialValues={daily_surv}
       onSubmit={ (values) => {
        const today = moment()
        const sendObject = {
          Time: moment(today, 'YYYY-MM-DD, h:mm:ss').format('lll'),
          Email: email,
          Question_1: values[0].answer,
          Question_2: values[1].answer,
          Question_3: values[2].answer,
          Question_4: values[7].answer,
          Question_5: values[9].answer,
          Question_6: values[3].answer,
          Question_7: values[4].answer,
          Question_8: values[5].answer,
          Question_9: values[6].answer,
          Question_10: values[8].answer
        }
        Object.keys(sendObject).forEach(key => {
          if (sendObject[key] === true){
            sendObject[key] = "Tak"
          }
          if (sendObject[key] === false){
            sendObject[key] = "Nie"
          }
        });
        axios.post(DAILY_URL, sendObject).then((response) => {
          console.log(response.data)
        }).catch((err) => {
          console.log(err)
        })
        navigation.navigate('Home'); 
        dispatch(setDailyDate())
      }}
     >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="bg-white flex-columns">
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">Email</Text>
              <TextInput onChangeText={(e) => setEmail(e)} 
              value={email}
              className="border rounded p-2 m-2 text-lg"
              inputMode='email'
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'/>
            </View>
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
            <View>
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
              <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[6].question}`}</Text>
              <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                  <RadioButton
                  value='Cicho'
                  status={ volResponnse === 'Cicho' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Cicho')); values[6].answer = 'Cicho'}}
                  />
                  <Text className="text-lg m-1">Cicho</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Normalnie'
                  status={ volResponnse === 'Normalnie' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Normalnie')); values[6].answer = 'Normalnie'}}
                  />
                  <Text className="text-lg m-1">Normalnie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Głośno'
                  status={ volResponnse === 'Głośno' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Głośno')); values[6].answer = 'Głośno'}}
                  />
                  <Text className="text-lg m-1">Głośno</Text>
                </View>
              </View>
            </View>
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[7].question}`}</Text>
              <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                  <RadioButton
                  value='Nie'
                  status={ dreamResponse === 'Nie' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Nie')); values[7].answer = 'Nie'}}
                  />
                  <Text className="text-lg m-1">Nie</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Sny'
                  status={ dreamResponse === 'Sny' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Sny')); values[7].answer = 'Sny'}}
                  />
                  <Text className="text-lg m-1">Sny</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Koszmary'
                  status={ dreamResponse === 'Koszmary' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Koszmary')); values[7].answer = 'Koszmary'}}
                  />
                  <Text className="text-lg m-1">Koszmary</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Oba'
                  status={ dreamResponse === 'Oba' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Oba')); values[7].answer = 'Oba'}}
                  />
                  <Text className="text-lg m-1">Oba</Text>
                </View>
              </View>
            </View>
            {(values[7].answer !== 'Nie') && (
            <RadioButtons values={values} idx={8}/>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="font-bold text-2xl text-center mt-2">{`${values[9].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${9}.answer`)}
                onBlur={handleBlur(`${9}.answer`)}
                value={values[9].answer}
                className="border rounded p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                />
            </View>
            <View className="m-5 flex-row justify-center">
              <TouchableOpacity className="p-3 align-middle justify-center rounded-full bg-violet" onPress={handleSubmit}>
                <Text className="text-xl flex-row p-2 text-white">Submit survey</Text>
              </TouchableOpacity>
            </View>
        </View>
      )}
     </Formik>
    </View>
  )
}