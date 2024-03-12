import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BackArrow from '../components/BackArrow';
import AccordionItem from '../components/AccordionItem';

export default function Guides() {

  return (
    <ScrollView >
      <View className="flex-row justify-between w-full p-1">
        <BackArrow text='Guides'/>
        <Text className="self-center p-2 w-10/12 text-lg">Here you can read guides to better dreams.</Text>
      </View>
      <View className="flex-column border-t-2 border-violet p-2 w-full items-center">
        <AccordionItem className="b" title="Kolekcjonowanie snów, ich spis oraz wyszczególnienie Znaków Sennych">
          <Text className="text-lg">{`1. Zapisuj sny w jakiejś formie dziennika - najważniejsze jest, by po każdym śnie zapisywać cokolwiek. Nawet jeżeli będą to pojedyncze słowa, mogą się one okazać kluczowe do wyszczególnienia powtarzających się schematów snów, dzięki którym będziemy w stanie w trakcie snu być ich świadom i lepiej się do nich przygotować.

2. Podkreślaj i zapisuj osobno słowa, tematyki, osoby czy inne przedmioty powtarzające się na przestrzeni swojej historii snów. Spróbuj pogrupować je dla ułatwienia we własne kategorie.

3. Po dłuższym czasie, kiedy jesteś w stanie wyszczególnić najczęściej powtarzające się Znaki Senne, pora na ostatni etap. Jeżeli twoje Znaki Senne są nierealistyczne, skup swoje myśli przed snem tylko i wyłącznie na nich. Używając wyobraźni, wytwórz świat skupiający się głównie na danym Znaku Sennym.  Jeżeli jesteś w stanie powiązać je z realnymi wydarzeniami czy postaciami, za każdym razem gdy to się stanie, analizuj dokładnie każdy szczegół danej sytuacji. W ten sposób w trakcie snu, łatwo będzie dostrzec jakieś nietypowe dla danego Znaku Sennego zachowania i uświadomić sobie o śnie.`}
          </Text>
        </AccordionItem>
        <AccordionItem title="Osiąganie zamierzonych przez siebie celów">
          <Text className="text-lg">{`Jeżeli zapoznałeś już się trochę z tym w jaki sposób śnisz, co na ten sen wpływa oraz zapamiętujesz chociaż fragmenty snów, możesz określić swoje zamierzone cele, które chcesz osiągnąć. Przy ich ustalaniu pamiętaj jednak o trzech ważnych regułach:

1. Określ cele ogólne lub szczegółowe za pomocą numerów i czasu - każda osoba jest inna i każda jest w stanie osiągnąć inne rzeczy. Dlatego dostosuj swoje cele do swoich potrzeb, zwiększając za każdym razem, gdy jakiś cel osiągniesz jego zakres. Staraj się przy tym w miarę możliwości nie zwiększać zakresu czasowego.

2. Określ cele, które sprawią ci wyzwanie, ale których jesteś dokonać - ustawiając za łatwe cele, ciężko będzie ci osiągnąć rozwój. Ustawiając za trudne, szybko się zniechęcisz i zdemotywujesz. Pamiętaj jednak, że porażka jest częścią procesu nauki.

3. Określ cele zarówno krótkodystansowe, jak i takie, które zajmą ci więcej czasu - ustaw cele takie, które jesteś w stanie wykonać w krótkim przedziale czasu, i takie, które zajmą tego czasu dużo więcej. Jeżeli jes
`}
          </Text>
        </AccordionItem> 
      </View>
    </ScrollView>
  )
}