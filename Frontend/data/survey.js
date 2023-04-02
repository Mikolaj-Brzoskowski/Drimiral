export const start_surv = [
{ question: 'Czy zazwyczaj słuchasz muzyki w ciągu dnia?', type: 'boolean' },
{ question: 'Czy zazwyczaj słuchasz muzyki przed snem?', type: 'boolean' },
{ question: 'Czy przed snem używasz urządzenia emitującego światło niebieskie (eg. Smartfon)?', type: 'boolean'  },
{ question: 'Ile czasu średnio potrzebujesz, żeby zasnąć?', type: 'input' },
{ question: 'Czy zażywasz zazwyczaj leki mogące mieć wpływ na sen?', type: 'boolean' },
{ question: 'Jak często pamiętasz swoje sny?', type: 'range' },
{ question: 'Jak często mówisz innym o swoich snach?', type: 'range' },
{ question: 'Jak często twój sen wpływa na humor podczas dnia?', type: 'range' },
{ question: 'Jak często zdarza ci się mieć nawracające sny?', type: 'range' },
{ question: 'Czy jesteś w stanie śnić na jawie?', type: 'boolean' },
{ question: 'Czy jesteś w stanie mieć świadome sny?', type: 'boolean' },
{ question: 'Czy śpisz samx?', type: 'boolean' },
{ question: 'Czy często korzystasz z napojów pobudzających?', type: 'range' },
{ question: 'Wiek:', type: 'input' },
{ question: 'Płeć:', type: 'gender' }
]

export const daily_surv = [
{ question: 'Jak dobrze spałxś dzisiaj?', type: 'range' },
{ question: 'Ile godzin dzisiaj spałxś?', type: 'input' },
{ question: 'Czy obudziłxś się w środku nocy?', type: 'boolean' },
{ question: 'Jeżeli tak, to ile razy w ciągu nocy?', type: 'input' },
{ question: 'Czy słuchałxś muzyki przed snem?', type: 'boolean' },
{ question: 'Jeżeli tak, jaki gatunek muzyczny dominował w trakcie słuchania przed snem?', type: 'input' },
{ question: 'Czy miałxś jakieś sny/koszmary?', type: 'dream_type' },
{ question: 'Jeżeli tak, to czy pamiętasz swój sen?', type: 'boolean' },
{ question: 'Dodatkowe informacje odnośnie snu, którymi chcesz się podzielić.', type: 'input' }
]