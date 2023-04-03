export const start_surv = [
{ question: 'Czy zazwyczaj słuchasz muzyki w ciągu dnia?', type: 'boolean', answer: false},
{ question: 'Czy zazwyczaj słuchasz muzyki przed snem?', type: 'boolean', answer: false},
{ question: 'Czy przed snem używasz urządzenia emitującego światło niebieskie (eg. Smartfon)?', type: 'boolean', answer: false },
{ question: 'Ile czasu średnio potrzebujesz, żeby zasnąć? (w minutach)', type: 'input', answer: '0'},
{ question: 'Czy zażywasz zazwyczaj leki mogące mieć wpływ na sen?', type: 'boolean', answer: false},
{ question: 'Jak często pamiętasz swoje sny?', type: 'rate', answer: 'Nigdy'},
{ question: 'Jak często mówisz innym o swoich snach?', type: 'rate', answer: 'Nigdy'},
{ question: 'Jak często twój sen wpływa na humor podczas dnia?', type: 'rate', answer: 'Nigdy'},
{ question: 'Jak często zdarza ci się mieć nawracające sny?', type: 'rate', answer: 'Nigdy'},
{ question: 'Jak często korzystasz z napojów pobudzających?', type: 'rate', answer: 'Nigdy'},
{ question: 'Czy jesteś w stanie śnić na jawie?', type: 'boolean', answer: false},
{ question: 'Czy jesteś w stanie mieć świadome sny?', type: 'boolean', answer: false},
{ question: 'Czy śpisz samx?', type: 'boolean', answer: false},
{ question: 'Wiek:', type: 'input', answer: '0'},
{ question: 'Płeć:', type: 'gender', answer: 'Mężczyzna'}
]

export const daily_surv = [
{ question: 'Jak dobrze spałxś dzisiaj?', type: 'rate', answer: 'Nie spałem'},
{ question: 'Ile godzin dzisiaj spałxś?', type: 'number', answer: '0'},
{ question: 'Czy obudziłxś się w środku nocy?', type: 'boolean', answer: false},
{ question: 'Ile razy w ciągu nocy obudziłxś się?', type: 'number', answer: '0'},
{ question: 'Czy słuchałxś muzyki przed snem?', type: 'boolean', answer: false},
{ question: 'Jaki gatunek muzyczny dominował w trakcie słuchania przed snem?', type: 'text', answer: ''},
{ question: 'Czy miałxś jakieś sny/koszmary?', type: 'dream_type', answer: 'Nie'},
{ question: 'Czy pamiętasz swój sen?', type: 'boolean', answer: false},
{ question: 'Dodatkowe informacje odnośnie snu, którymi chcesz się podzielić.', type: 'text', answer: ''}
]