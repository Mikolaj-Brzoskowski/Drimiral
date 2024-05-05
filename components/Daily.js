import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { Formik } from 'formik';
import { daily_surv } from '../data/survey'
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'
import { setDailyDate } from '../features/userSlice';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { DAILY_URL } from '@env'
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import NumericInput from './NumericInput';

export default function Daily() {

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
      Question_4: values[3].answer,
      Question_5: values[4].answer,
      Question_6: values[5].answer,
      Question_7: values[6].answer
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
    navigation.navigate('Drimiral'); 
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
            <RadioButtons values={values} idx={0} />
            <NumericInput values={values} handleChange={handleChange} handleBlur={handleBlur} idx={1} />
            <RadioButtons values={values} idx={2} />
            {(values[2].answer !== false) && (
              <NumericInput values={values} handleChange={handleChange} handleBlur={handleBlur} idx={3} />
            )}
            <RadioButtons values={values} idx={4} />
            {(values[4].answer !== false) && (
            <RadioButtons values={values} idx={5}/>
            )}
            <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[6].question}`}</Text>
              <TextInput
                onChangeText={handleChange(`${6}.answer`)}
                onBlur={handleBlur(`${6}.answer`)}
                value={values[6].answer}
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