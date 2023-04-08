import { View, Text, Button, TextInput, Switch } from 'react-native'
import React, {useState} from 'react'
import { Formik } from 'formik'
import { start_surv } from '../data/survey'
import RateRadioButtons from './RateRadioButtons'
import { RadioButton } from 'react-native-paper';
import RadioButtons from './RadioButtons';
import { useNavigation } from '@react-navigation/native'

const Starting = () => { 

    const [booleanValue, setBooleanValue] = useState('Mężczyzna')
    const navigation = useNavigation()

    return (
        <View>
        <Formik
        initialValues={start_surv}
        onSubmit={ (values) => {console.log(values); navigation.navigate('Home')}}
        >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View className="bg-white flex-columns">
                <RadioButtons values={values} idx={0}/>
                <RadioButtons values={values} idx={1}/>
                <RadioButtons values={values} idx={2}/>
                <View className="border-t-2 border-gray-300 w-full mt-2">
                <Text className="font-bold text-2xl text-center mt-2">{`${values[3].question}`}</Text>
                <TextInput
                name={`${3}.answer`}
                onChangeText={handleChange(`${3}.answer`)} 
                onBlur={handleBlur(`${3}.answer`)} 
                value={values[3].answer} 
                className="border rounded p-2 m-2 text-lg"
                inputMode='numeric' 
                style={{borderColor: '#6159E6'}} 
                cursorColor='#6159E6'/>
                </View>
                <RadioButtons values={values} idx={4}/>
                <RateRadioButtons values={values} idx={5}/>
                <RateRadioButtons values={values} idx={6}/>
                <RateRadioButtons values={values} idx={7}/>
                <RateRadioButtons values={values} idx={8}/>
                <RateRadioButtons values={values} idx={9}/>
                <RadioButtons values={values} idx={10}/>
                <RadioButtons values={values} idx={11}/>
                <RadioButtons values={values} idx={12}/>
                <View className="border-t-2 border-gray-300 w-full mt-2">
                    <Text className="font-bold text-2xl text-center mt-2">{`${values[13].question}`}</Text>
                    <TextInput onChangeText={handleChange(`${13}.answer`)} 
                    onBlur={handleBlur(`${13}.answer`)} value={values[13].answer} 
                    className="border rounded p-2 m-2 text-lg"
                    inputMode='numeric' 
                    style={{borderColor: '#6159E6'}} 
                    cursorColor='#6159E6'/>
                    <View className="border-t-2 border-gray-300 w-full mt-2">
                        <Text className="font-bold text-2xl text-center mt-2">{`${values[14].question}`}</Text>
                        <View className="flex-row justify-evenly p-3 flex-wrap">
                            <View className="flex-row">
                                <RadioButton
                                value='Mężczyzna'
                                status={ booleanValue === 'Mężczyzna' ? 'checked' : 'unchecked' }
                                onPress={() => {(setBooleanValue('Mężczyzna')); values[14].answer = 'Mężczyzna'}}
                                />
                                <Text className="text-lg m-1">Mężczyzna</Text>
                            </View>
                            <View className="flex-row">
                                <RadioButton
                                value='Kobieta'
                                status={ booleanValue === 'Kobieta' ? 'checked' : 'unchecked' }
                                onPress={() => {(setBooleanValue('Kobieta')); values[14].answer = 'Kobieta'}}
                                />
                                <Text className="text-lg m-1">Kobieta</Text>
                            </View>
                            <View className="flex-row">
                                <RadioButton
                                value='Inne'
                                status={ booleanValue === 'Inne' ? 'checked' : 'unchecked' }
                                onPress={() => {(setBooleanValue('Inne')); values[14].answer = 'Inne'}}
                                />
                                <Text className="text-lg m-1">Inne</Text>
                            </View>
                            <View className="flex-row">
                                <RadioButton
                                value='Wolę nie podawać'
                                status={ booleanValue === 'Często' ? 'checked' : 'unchecked' }
                                onPress={() => {(setBooleanValue('Często')); values[14].answer = 'Często'}}
                                />
                                <Text className="text-lg m-1">Wolę nie podawać</Text>
                            </View>
                        </View>
                    </View>
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

export default Starting