import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow';
import AccordionItem from '../components/AccordionItem';

export default function Guides() {

  return (
    <ScrollView >
      <View className="flex-column p-2 w-full items-center">
        <AccordionItem className="b" title="Collecting dreams, listing them and detailing the Dream Signs">
          <Text className="text-white text-lg">{`1. Write down dreams in some form of diary - the most important thing is to write down anything after each dream. Even if they are single words, they can prove crucial to detailing recurring dream patterns so that you can be aware of them while you are dreaming and better prepare for them.

2. Highlight and write down separately words, themes, people or other objects that recur throughout your dream history. Try to group them into their own categories for ease.

3. After you've been able to detail the most frequently recurring Dream Signs for a while, it's time for the final step. If your Dream Signs are unrealistic, focus your thoughts before sleep solely on them. Using your imagination, create a world focusing mainly on a particular Dream Sign.  If you are able to associate them with real events or characters, each time this happens, analyze every detail of the situation carefully. In this way, while you are dreaming, it will be easy to spot any behavior that is unusual for a given Dream Sign and become aware of the dream.`}
          </Text>
        </AccordionItem>
        <AccordionItem title="Achieve the goals you set for yourself">
          <Text className="text-white text-lg">{`If you have already become somewhat familiar with how you dream, what influences that dream, and remember at least fragments of dreams, you can set your intended goals that you want to achieve. However, when setting them, remember three important rules:

1. Set realistic goals for achievable - every person is different and everyone is capable of achieving different things. Therefore, tailor your goals to your needs, increasing each time a goal is achieved. While doing so, try not to increase the time range as much as possible.

2. Set goals that will challenge you, but which you are accomplished - by setting too easy goals, you will find it hard to achieve development. By setting too difficult, you will quickly become discouraged and demotivated. Remember, however, that failure is part of the learning process.

3. Set goals such as those you are able to complete in a short period of time, and those that will take a lot more of that time. Use numbers when defining such goals.

For example, correct goals are:
- today I will sleep 8h
- during the week I will get up rested 3 times
- during the month I will remember 10 dreams

Incorrect goals are goals such as:
- I need to sleep better (not specific enough)
- I will remember all my sleep today (unrealistic goal)
`}
          </Text>
        </AccordionItem> 
      </View>
    </ScrollView>
  )
}