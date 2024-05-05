import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, {useState, useEffect, useRef} from 'react'
import { Formik } from 'formik'
import { start_surv } from '../data/survey'
import RateRadioButtons from './RateRadioButtons'
import { RadioButton } from 'react-native-paper';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { startSurveyDone } from '../features/userSlice'
import moment from 'moment';
import { START_URL } from '@env'
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import NumericInput from './NumericInput'

const Starting = () => { 

    const [genderValue, setGenderValue] = useState('Man')
    const [email, setEmail] = useState()
    const [values, setValues] = useState()
    const [netStatus, setNetStatus] = useState()

    const isFirstRender = useRef(true);

    const navigation = useNavigation()
    const dispatch = useDispatch()

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        else {
            if (netStatus === true){
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
        Question_7: values[6].answer,
        Question_8: values[7].answer,
        Question_9: values[8].answer,
        Question_10: values[9].answer,
        Question_11: values[10].answer,
        Question_12: values[11].answer,
        Age: values[12].answer,
        Gender: values[13].answer
        }
        Object.keys(sendObject).forEach(key => {
        if (sendObject[key] === true){
            sendObject[key] = "Yes"
        }
        if (sendObject[key] === false){
            sendObject[key] = "No"
        }
        });
        axios.post(START_URL, sendObject).then((response) => {
        console.log(response.data)
        }).catch((err) => {
        console.log(err)
        })
        navigation.navigate('Drimiral'); 
        dispatch(startSurveyDone())
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
        initialValues={start_surv}
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
                    keyboardType="default"/>
                </View>
                <RadioButtons values={values} idx={0}/>
                <RadioButtons values={values} idx={1}/>
                <NumericInput values={values} handleChange={handleChange} handleBlur={handleBlur} idx={2} />
                <RadioButtons values={values} idx={3}/>
                <RateRadioButtons values={values} idx={4}/>
                <RateRadioButtons values={values} idx={5}/>
                <RateRadioButtons values={values} idx={6}/>
                <RateRadioButtons values={values} idx={7}/>
                <RateRadioButtons values={values} idx={8}/>
                <RadioButtons values={values} idx={9}/>
                <RadioButtons values={values} idx={10}/>
                <RateRadioButtons values={values} idx={11}/>
                <NumericInput values={values} handleChange={handleChange} handleBlur={handleBlur} idx={12} />
                <View className="border-t-2 border-gray-300 w-full mt-2">
                    <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[13].question}`}</Text>
                    <View className="flex-row justify-evenly p-3 flex-wrap">
                        <View className="flex-row">
                            <RadioButton
                            value='Man'
                            status={ genderValue === 'Man' ? 'checked' : 'unchecked' }
                            onPress={() => {(setGenderValue('Man')); values[13].answer = 'Man'}}
                            />
                            <Text className="text-white text-lg m-1">Man</Text>
                        </View>
                        <View className="flex-row">
                            <RadioButton
                            value='Woman'
                            status={ genderValue === 'Woman' ? 'checked' : 'unchecked' }
                            onPress={() => {(setGenderValue('Woman')); values[13].answer = 'Woman'}}
                            />
                            <Text className="text-white text-lg m-1">Woman</Text>
                        </View>
                        <View className="flex-row">
                            <RadioButton
                            value='Other'
                            status={ genderValue === 'Other' ? 'checked' : 'unchecked' }
                            onPress={() => {(setGenderValue('Other')); values[13].answer = 'Other'}}
                            />
                            <Text className="text-white text-lg m-1">Other</Text>
                        </View>
                        <View className="flex-row">
                            <RadioButton
                            value='None'
                            status={ genderValue === 'None' ? 'checked' : 'unchecked' }
                            onPress={() => {(setGenderValue('None')); values[13].answer = 'None'}}
                            />
                            <Text className="text-white text-lg m-1">None</Text>
                        </View>
                    </View>
                </View>
                <View className="m-5 flex-row justify-center">
                <TouchableOpacity className="p-3 align-middle justify-center rounded-full bg-violet" onPress={handleSubmit}>
                    <Text className="text-white text-xl flex-row p-2">Submit survey</Text>
                </TouchableOpacity>
                </View>
            </View>
        )}
        </Formik>
        </View>
    )
}

export default Starting