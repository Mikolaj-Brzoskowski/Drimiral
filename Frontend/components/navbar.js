import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useNavigationContainerRef} from '@react-navigation/native'

const color = '#f06795'

export default function NavBar() {

    const navigation = useNavigation()

    return(
      <SafeAreaView className="pt-2 bg-white">
        <View className="flex flex-row h-15 justify-between p-1.5 items-center bg-black pr-5 border-2 border-white-500 rounded-t-2xl">
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <View>
              <Image
              source={require('../assets/drimiral.png')}
              className=" h-10 w-10 p-4 rounded-full"
              />
              <Text className="text-white text-xs">Home</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text id="Journal" className="text-white text-xl" onPress={() => navigation.navigate('Journal')}>Journal</Text>
          <Text id="Music" className="text-white text-xl" onPress={() => navigation.navigate('Music')}>Music</Text>
          <Text id="Stats" className="text-white text-xl" onPress={() => navigation.navigate('Stats')}>Stats</Text>
        </View>
      </SafeAreaView>
    )
}