import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import { RadioButton } from 'react-native-paper';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'
import { setDailyDate } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {DAILY_URL} from '@env'
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';

export default function Daily() {

  const [booleanValue, setBooleanValue] = useState()
  const [booleanValue2, setBooleanValue2] = useState()
  const [dreamResponse, setDreamResponse] = useState('No')
  const [rateResponse, setRateResponse] = useState(`I haven't slept`)
  const [volResponnse, setVolResponnse] = useState('Quietly')
  const [email, setEmail] = useState()

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [values, setValues] = useState()
  const [netStatus, setNetStatus] = useState()
  const isFirstRender = useRef(true);

  useEffect(() => {
      if (isFirstRender.current) {
          isFirstRender.current = false;
          return;
      }
      else {
          if (netStatus){
              sendValues()
          }
          else {
              createConnectionAlert()
              setNetStatus()
          }
      }
  },[netStatus])

  const getConnectionStatus = () => {
    NetInfo.fetch().then(state => {
        setNetStatus(state.isInternetReachable);
    });
  }

  const sendValues = () => {
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
        sendObject[key] = "Yes"
      }
      if (sendObject[key] === false){
        sendObject[key] = "No"
      }
    });
    axios.post(DAILY_URL, sendObject).then((response) => {
      console.log(response.data)
    }).catch((err) => {
      console.log(err)
    })
    navigation.navigate('Home'); 
    dispatch(setDailyDate())
    }
  
  const createConnectionAlert = () =>
  Alert.alert('No Network Connection!', 'Please connect to the Internet before sending survey.', [
    {
      text: 'Ok',
      style: 'cancel',
    }
  ]);

  return (
    <View>
      <Formik
       initialValues={daily_surv}
       onSubmit={ (values) => {
        setValues(values);
        getConnectionStatus()
      }}>
      {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className="flex-columns">
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">Email</Text>
              <TextInput onChangeText={(e) => setEmail(e)} 
              value={email}
              className="border rounded p-2 m-2 text-lg"
              inputMode='email'
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'
              placeholderTextColor="#6159E6" 
              color="white"
              placeholder="Type here..." 
              keyboardType="default" />
            </View>
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[0].question}`}</Text>
              <View className="flex-row justify-evenly p-3 flex-wrap">
                <View className="flex-row">
                  <RadioButton
                  value={`I haven't slept`}
                  status={ rateResponse === `I haven't slept` ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse(`I haven't slept`)); values[0].answer = `I haven't slept`}}
                  />
                  <Text className="text-white text-lg m-1">I haven't slept</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Bad'
                  status={ rateResponse === 'Bad' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Bad')); values[0].answer = 'Bad'}}
                  />
                  <Text className="text-white text-lg m-1">Bad</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Moderately'
                  status={ rateResponse === 'Moderately' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Moderately')); values[0].answer = 'Moderately'}}
                  />
                  <Text className="text-white text-lg m-1">Moderately</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Good'
                  status={ rateResponse === 'Good' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Good')); values[0].answer = 'Good'}}
                  />
                  <Text className="text-white text-lg m-1">Good</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Amazingly'
                  status={ rateResponse === 'Amazingly' ? 'checked' : 'unchecked' }
                  onPress={() => {(setRateResponse('Amazingly')); values[0].answer = 'Amazingly'}}
                  />
                  <Text className="text-white text-lg m-1">Amazingly</Text>
                </View>
              </View>
            </View>
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[1].question}`}</Text>
              <TextInput onChangeText={handleChange(`${1}.answer`)} 
              onBlur={handleBlur(`${1}.answer`)} value={values[1].answer} 
              className="border rounded p-2 m-2 text-lg"
              inputMode='numeric' 
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'
              placeholderTextColor="#6159E6"
              color="white"
              placeholder="Type here..." 
              keyboardType="default"/>
            </View>
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[2].question}`}</Text>
              <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !booleanValue ? 'checked' : 'unchecked' }
                  onPress={() => {(setBooleanValue(false)); values[2].answer = false}}
                  />
                  <Text className="text-white text-lg m-1">No</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                    value={true}
                    status={ booleanValue ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue(true)); values[2].answer = true}}
                    />
                  <Text className="text-white text-lg m-1">Yes</Text>
                </View>
              </View>
            </View >
            {(values[2].answer !== false) && (
              <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[3].question}`}</Text>
              <TextInput onChangeText={handleChange(`${3}.answer`)} onBlur={handleBlur(`${3}.answer`)}
              value={values[3].answer}
              className="border rounded p-2 m-2 text-lg"
              inputMode='numeric'
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'
              placeholderTextColor="#6159E6" 
              color="white"
              placeholder="Type here..." 
              keyboardType="default" />
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[4].question}`}</Text>
              <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                  <RadioButton
                  value={false}
                  status={ !booleanValue2 ? 'checked' : 'unchecked' }
                  onPress={() => {(setBooleanValue2(false)); values[4].answer = false}}
                  />
                  <Text className="text-white text-lg m-1">No</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                    value={true}
                    status={ booleanValue2 ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue2(true)); values[4].answer = true}}
                    />
                  <Text className="text-white text-lg m-1">Yes</Text>
                </View>
              </View>
            </View>
            {(values[4].answer !== false) && (
            <View>
              <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[5].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${5}.answer`)}
                onBlur={handleBlur(`${5}.answer`)}
                value={values[5].answer}
                className="border rounded p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                placeholderTextColor="#6159E6"
                color="white"
                placeholder="Type here..." 
                keyboardType="default"/>
              </View>
              <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[6].question}`}</Text>
              <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                  <RadioButton
                  value='Quietly'
                  status={ volResponnse === 'Quietly' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Quietly')); values[6].answer = 'Quietly'}}
                  />
                  <Text className="text-white text-lg m-1">Quietly</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Normal'
                  status={ volResponnse === 'Normal' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Normal')); values[6].answer = 'Normal'}}
                  />
                  <Text className="text-white text-lg m-1">Normal</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Loudly'
                  status={ volResponnse === 'Loudly' ? 'checked' : 'unchecked' }
                  onPress={() => {(setVolResponnse('Loudly')); values[6].answer = 'Loudly'}}
                  />
                  <Text className="text-white text-lg m-1">Loudly</Text>
                </View>
              </View>
            </View>
            </View>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[7].question}`}</Text>
              <View className="flex-row justify-evenly p-3 flex-wrap">
                <View className="flex-row">
                  <RadioButton
                  value='No'
                  status={ dreamResponse === 'No' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('No')); values[7].answer = 'No'}}
                  />
                  <Text className="text-white text-lg m-1">No</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Dreams'
                  status={ dreamResponse === 'Dreams' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Dreams')); values[7].answer = 'Dreams'}}
                  />
                  <Text className="text-white text-lg m-1">Dreams</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Nightmares'
                  status={ dreamResponse === 'Nightmares' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Nightmares')); values[7].answer = 'Nightmares'}}
                  />
                  <Text className="text-white text-lg m-1">Nightmares</Text>
                </View>
                <View className="flex-row">
                  <RadioButton
                  value='Both'
                  status={ dreamResponse === 'Both' ? 'checked' : 'unchecked' }
                  onPress={() => {(setDreamResponse('Both')); values[7].answer = 'Both'}}
                  />
                  <Text className="text-white text-lg m-1">Both</Text>
                </View>
              </View>
            </View>
            {(values[7].answer !== 'No') && (
            <RadioButtons values={values} idx={8}/>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[9].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${9}.answer`)}
                onBlur={handleBlur(`${9}.answer`)}
                value={values[9].answer}
                className="border rounded p-2 m-2 text-lg"
                multiline
                style={{borderColor: '#6159E6'}}
                cursorColor='#6159E6'
                placeholderTextColor="#6159E6"
                color="white"
                placeholder="Type here..." 
                keyboardType="default"/>
            </View>
            <View className="m-5 flex-row justify-center">
              <TouchableOpacity className="p-3 align-middle justify-center rounded-full bg-violet" onPress={handleSubmit}>
                <Text className="text-white text-xl flex-row p-2 text-white">Submit survey</Text>
              </TouchableOpacity>
            </View>
        </View>
      )}
     </Formik>
    </View>
  )
}