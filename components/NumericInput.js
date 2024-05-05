import { View, Text, TextInput } from 'react-native'
import React from 'react'

const NumericInput = ({values, handleChange, handleBlur, idx}) => {

    return (
        <View className="border-t-2 border-gray-300 w-full mt-2">
              <Text className="text-white font-bold text-2xl text-center mt-2">{`${values[idx].question}`}</Text>
              <TextInput onChangeText={handleChange(`${idx}.answer`)} 
              onBlur={handleBlur(`${idx}.answer`)} value={values[idx].answer} 
              className="border rounded p-2 m-2 text-lg"
              inputMode='numeric' 
              style={{borderColor: '#6159E6'}} 
              cursorColor='#6159E6'
              placeholderTextColor="#6159E6"
              color="white"
              placeholder="Type here..." 
              keyboardType="default"/>
            </View>
    )
}

export default NumericInput