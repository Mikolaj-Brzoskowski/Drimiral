import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native';
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/solid';

if(Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function AccordionItem({ children, title }) {
    const [ expanded, setExpanded ] = useState(false);
  
    function toggleItem() {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(!expanded);
    }
  
    const body = <View className="p-2">{ children }</View>;
  
    return (
      <View className="p-2">
        <TouchableOpacity className="p-2 flex-column justify-between" onPress={ toggleItem }>
          <Text className="font-bold text-2xl text-center">{ title }</Text>
          <View className="self-center">
          { expanded ?
            <ChevronUpIcon size={40} color="#6159E6" /> :
            <ChevronDownIcon size={40} color="#6159E6" /> }
          </View>
        </TouchableOpacity>
        { expanded && body }
      </View>
    );
  }