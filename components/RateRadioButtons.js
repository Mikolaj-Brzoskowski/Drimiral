import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';

const RateRadioButtons = ({values, idx}) => {

    const [booleanValue, setBooleanValue] = useState('Never')

    return (
        <View className="border-t-2 border-gray-300 w-full mt-2">
            <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[idx].question}`}</Text>
            <View className="flex-row justify-evenly p-3 flex-wrap">
            <View className="flex-row">
                <RadioButton
                value='Never'
                status={ booleanValue === 'Never' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Never')); values[idx].answer = 'Never'}}
                />
                <Text className="text-white text-lg m-1">Never</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Rare'
                status={ booleanValue === 'Rare' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Rare')); values[idx].answer = 'Rare'}}
                />
                <Text className="text-white text-lg m-1">Rare</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Sometimes'
                status={ booleanValue === 'Sometimes' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Sometimes')); values[idx].answer = 'Sometimes'}}
                />
                <Text className="text-white text-lg m-1">Sometimes</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Often'
                status={ booleanValue === 'Often' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Often')); values[idx].answer = 'Often'}}
                />
                <Text className="text-white text-lg m-1">Often</Text>
            </View>
            <View className="flex-row">
                <RadioButton
                value='Almost always'
                status={ booleanValue === 'Almost always' ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue('Almost always')); values[idx].answer = 'Almost always'}}
                />
                <Text className="text-white text-lg m-1">Almost always</Text>
            </View>
            </View>
        </View>
    )
}

export default RateRadioButtons