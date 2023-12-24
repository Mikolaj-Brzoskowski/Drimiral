import React, { useState } from 'react'
import { View, Text, Image, TouchableWithoutFeedback, StatusBar, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Bars3Icon } from 'react-native-heroicons/solid'
import Menu from './Menu'

export default function NavBar() {


    const [isMenuActive, setisMenuActive] = useState(false)
    const navigation = useNavigation()
    const route = useRoute();
    const screenName = route.name;

    const displayMenu = () => {
      setisMenuActive(!isMenuActive)
    }

    return(
      <SafeAreaView className="bg-white">
        <StatusBar
        animated={true}
        backgroundColor="#0F0F0F"
        barStyle='light-content'
      />
        <View className="flex flex-row h-15 justify-between px-3 py-1 items-center bg-black border-2 border-white-500">
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <Image
          source={require('../assets/drimiral.png')}
          className="h-14 w-14 rounded-full"
          />
        </TouchableWithoutFeedback>
        <Text id="Current_screen" className="text-white text-xl">{screenName}</Text>
        {/* <Text id="Music" className="text-white text-xl" onPress={() => navigation.navigate('Music')}>Music</Text>
        <Text id="Stats" className="text-white text-xl" onPress={() => navigation.navigate('Stats')}>Stats</Text> */}
        <View className="relative">
            <TouchableOpacity 
            className={`rounded-full p-2 self-center bg-violet`}
            onPress={displayMenu}>
              <Bars3Icon size={30} color='white'/>
            </TouchableOpacity>
            {isMenuActive ? <Menu/> : null}
        </View>
        </View>
      </SafeAreaView>
    )
}