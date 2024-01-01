import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow';
import AccordionItem from '../components/AccordionItem';

export default function Guides() {

  return (
    <ScrollView >
      <View className="flex-row justify-between w-full">
        <BackArrow text='Guides'/>
        <Text className="self-center p-2 w-10/12">Here you can read guides to better dreams.</Text>
      </View>
      <View className="flex-column border-t-2 border-gray-300 p-2 w-full items-center">
        <AccordionItem title="Kolekcjonowanie snów, ich spis oraz wyszczególnienie Znaków Sennych">
          <Text className="text-lg">{`1. Zapisuj sny w jakiejś formie dziennika - najważniejsze jest, by po każdym śnie zapisywać cokolwiek. Nawet jeżeli będą to pojedyncze słowa, mogą się one okazać kluczowe do wyszczególnienia powtarzających się schematów snów, dzięki którym będziemy w stanie w trakcie snu być ich świadom i lepiej się do nich przygotować.

2. Podkreślaj i zapisuj osobno słowa, tematyki, osoby czy inne przedmioty powtarzające się na przestrzeni swojej historii snów. Spróbuj pogrupować je dla ułatwienia we własne kategorie.

3. Po dłuższym czasie, kiedy jesteś w stanie wyszczególnić najczęściej powtarzające się Znaki Senne, pora na ostatni etap. Jeżeli twoje Znaki Senne są nierealistyczne, skup swoje myśli przed snem tylko i wyłącznie na nich. Używając wyobraźni, wytwórz świat skupiający się głównie na danym Znaku Sennym.  Jeżeli jesteś w stanie powiązać je z realnymi wydarzeniami czy postaciami, za każdym razem gdy to się stanie, analizuj dokładnie każdy szczegół danej sytuacji. W ten sposób w trakcie snu, łatwo będzie dostrzec jakieś nietypowe dla danego Znaku Sennego zachowania i uświadomić sobie o śnie.`}
          </Text>
        </AccordionItem>        
      </View>
    </ScrollView>
  )
}