import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';

const RateRadioButtons = ({values, idx}) => {

    const [booleanValue, setBooleanValue] = useState('Nigdy')

    return (
        <View className="border-t-2 border-gray-300 w-full mt-2">
            <Text className="font-bold text-2xl text-center mt-2">{`${values[idx].question}`}</Text>
            <View className="flex-row justify-evenly p-3 flex-wrap">
            <View className="flex-row">
                <RadioButton
                value='Nigdy'
                status={ booleanValue === 'Nigdy' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Nigdy')); values[idx].answer = 'Nigdy'}}
                />
                <Text className="text-lg m-1">Nigdy</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Rzadko'
                status={ booleanValue === 'Rzadko' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Rzadko')); values[idx].answer = 'Rzadko'}}
                />
                <Text className="text-lg m-1">Rzadko</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Czasami'
                status={ booleanValue === 'Czasami' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Czasami')); values[idx].answer = 'Czasami'}}
                />
                <Text className="text-lg m-1">Czasami</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Często'
                status={ booleanValue === 'Często' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Często')); values[idx].answer = 'Często'}}
                />
                <Text className="text-lg m-1">Często</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Niemal zawsze'
                status={ booleanValue === 'Niemal zawsze' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Niemal zawsze')); values[idx].answer = 'Niemal zawsze'}}
                />
                <Text className="text-lg m-1">Niemal zawsze</Text>
            </View>
            </View>
        </View>
    )
}

export default RateRadioButtons