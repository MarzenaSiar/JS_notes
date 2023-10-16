function sum (a, b) {
    return a + b;
}

const result = sum(1, 2)
//console.log(result);
//console.log(sum(1 + 2);

function greetings(name) {
    return "Cześć, " + name; 
}

 console.log(greetings("Janusz"));

function getDayName(day) {
if(day === 0) {
    return "niedziela"
}//jeżeli w ifie jest return nie ma sensu pisać else
if(day === 1) {
    return "poniedziałek";
}
}
console.log(getDayName(0));//niedziela

function drawDigits(quantity) { 
    const temp = [];
    while (temp.lenght < quantity) { 
        const digit = Math.floor(Math.random() * 48 + 1)
        if (!temp.includes(digit)) {
            temp.push(digit)
        }
    }
    return temp;
}

console.log(drawDigits(6));

//fn do zwracania interesection 2 tablic
//algorytm postepowania

//Stwórz funkcję, która przyjmuję dwa parametry
//Stwórz pustą tablicę do zapisywania powtarzających się elementów 
//Przeiteruj po pierwszej - for
//Sprawdź w iteracji każdy element, czy jest w drugiej - includes
//Jeżeli jest, to dodaj to do pustej tablicy - push
//Zwróć tablic z punktu drugiego

function arrayIntersection(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
           result.push(arr1[i]);
        }
    }

    return result;
}

console.log(arrayIntersection([1, 2, 3],[3, 5, 6]));

// myLord - Witaj mój Panie!, Co jeszcze mogę dla Ciebie zrobić,
// Pięknie dzisiaj wyglądasz!

// 1. Stwórz funkcje, która nie ma args
// 2. Stworz tablice z tekstami i przypis do zmiennej
// 3. Zwróc losowy tekst zależny od indeksu z tablicy

function myLord() {
    const sentences = ['Witaj mój Panie!',' Co jeszcze mogę dla Ciebie zrobić', 'Pięknie dzisiaj wyglądasz!'];
    return sentences[Math.round(Math.random() * (sentences.length - 1))];
}

console.log(myLord())