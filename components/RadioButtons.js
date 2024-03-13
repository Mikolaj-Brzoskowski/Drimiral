import { View, Text } from 'react-native'
import React, {useState} from 'react'
import { RadioButton } from 'react-native-paper';

const RadioButtons = ({values, idx}) => {

    const [booleanValue, setBooleanValue] = useState()

    return (
        <View className="border-t-2 border-gray-300 w-full mt-2">
            <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[idx].question}`}</Text>
            <View className="flex-row justify-evenly p-3">
                <View className="flex-row">
                <RadioButton
                value={false}
                status={ !booleanValue ? 'checked' : 'unchecked' }
                onPress={() => {(setBooleanValue(false)); values[idx].answer = false}}
                displayName="asd"
                />
                <Text className="text-white text-lg m-1">No</Text>
                </View>
                <View className="flex-row">
                <RadioButton
                    value={true}
                    status={ booleanValue ? 'checked' : 'unchecked' }
                    onPress={() => {(setBooleanValue(true)); values[idx].answer = true}}
                    />
                <Text className="text-white text-lg m-1">Yes</Text>
                </View>
            </View>
        </View>
    )
}

export default RadioButtons