const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'pawel',
        city: 'Wroclaw',
        age: 37,
        hobbies: ['js', 'drugs', 'eat']
    },
    {
        name: 'pawel',
        city: 'chelm',
        age: 24,
        hobbies: ['tennis', 'sleep', 'gym']
    },
    {
        name: "iza",
        city: "warsaw",
        age: 28,
        hobbies: ["learning languages", "traveling", "js"]
    },
    {
        name: 'marzena',
        city: 'warsaw',
        age: 31,
        hobbies: ["js", "books", "travelling"],
    },
    {
        name: 'adam',
        city: 'pisz',
        age: 19,
        hobbies: ['guitar', 'gym', 'html']
    },
    {
        name: "kamila",
        city: "gdynia",
        age: 37,
        hobbies: ["diving", "eating", "js"]
    },
    {
        name: 'tomek',
        city: 'zabrze',
        age: 40,
        hobbies: ['paintball']
    },
    {
        name: 'dawid',
        city: 'tarnów',
        age: 23,
        hobbies: ['js', 'beer', 'css']
    },
    {
        name: "olga",
        city: "warszawa",
        age: 34,
        hobbies: ["js", "cats", "swimming"]
    },
    {
        name: 'kasia',
        city: 'warszawa',
        age: 29,
        hobbies: ['programowanie', 'sport']
    },
    {
        name: 'dominika',
        city: 'warszawa',
        age: 40,
        hobbies: ['cycling', 'dreaming', 'car driving']
    }
]

// console.log(data.length);

// policz średnią wieku

function calculateAvgAge(people) {
    let sum = 0;

    // for (let i = 0; i < people.length; i++) {
    //     sum += people[i].age
    // }

    for (const person of people) {
        sum += person.age;
    }

    return sum / people.length;
}

function calculateAvgAge2(people) {
    const ages = people.map((person)=> person.age)
    return ages.reduce((acc, age) => acc + age ) / people.length
}

// const result = calculateAvgAge2(data);
// console.log(result);

//policz średnią wieku ludzi z warszawy

function avgAgeWarsaw(items) {
    let sum = 0;
    let counter = 0;

    for (const item of items) {
        if (['warszawa', 'warsaw'].includes(item.city.toLowerCase())) {
            sum += item.age;
            counter++;
        }
    } return sum/counter;
}


const avgAgeWarsaw2 = (items) => {
    // filtrowanie, usuwanie niepotrzebnych
    const warsawItems = items.filter((item) => ['warszawa', 'warsaw'].includes(item.city.toLowerCase()));
    // mapowanie-tranformacja danych
    const ages = warsawItems.map((item) => item.age);
    //agregacja (sumowanie)
    return ages.reduce((acc, age) => acc + ages) /length;
}

//    for (const item of items) {
//    if (item.city === "warszawa" || item.city === "warsaw") {
//        sum += item.age;
//    }
//    }
//    return sum/counter;
// }

const r = avgAgeWarsaw2(data);
console.log(r);

//pisanie deklaratywne

const c = [1, 2, 3, 4]
x.filter((element) => element > 2);
x.filter((element) => element % 2);
x.filter((element) => 42); //boolean
x.filter((element) => 0); // boolean

//pusty string daje false, a zapisany true, ale pusta tablica, to prawda; undefiied jest fałszem, null jest fałszem

//programowanie funkcyjne (reduce, map, filter)

//czy wszyscy kochają JS
function isAllLoveJs(data) {
for (let i = 0; i < people.length; i++) {
   if (!elements[i].hobbies.includes("JS)")) {
   return false
   }
}

return true
}

console.log(res);

const isAllLoveJs = (elements) => elements.every((element) => elements.hobbies.includes("js)"))

//sprawdź czy ktokolwiek kocha pythona
function isAllLovePython(data) {
    for (let i = 0; i < people.length; i++) {
       if (elements[i].hobbies.includes("python)")) {
       return true
       }
    }

    return false 
}

    const isAllLovePython1 = (elements) => elements.some((element) => elements.hobbies.includes("python)"))
    const result = isAllLovePython1(data);
    console.log(isAllLovePython1);

    function isAllLovePython(data) {
        for (let i = 0; i < people.length; i++) {
        if (!['warszawa', 'warsaw'].includes(item.city.toLowerCase) && [i].age > 30); {
           return true
           }
        }
        return false 

    }
    const result = isAllLovePython1(data);
    console.log(isAllLovePython1);

    function isOlderThan30(people) {
        for (const person of people){
            // (!(a || b) && c)
            // (!(1 || 0) && 1) => F
            if (!('warsaw' === person.city || 'warszawa' === person.city) && person.age > 30){
                return true;
            }
        }
    
        return false;
    }


    function isOlderThan30(people) {
        for (const person of ple){
            // (!(a || b) && c)
            // (!(1 || 0) && 1) => F
            if (!('warsaw' === person.city || 'warszawa' === person.city) && person.age > 30){
                return true;
            }
        }

        //sprawdź ile jest unikalnych hobbies
function howManyUuniqueH(data) {
    for (let i = 0; i < people.length; i++) {
       if elements[i].hobbies.includes([i]==[i])counter
       return true
       }
    }

    return false 
}

// policz ile jest unikalnych hobbies

const countHobbies = (people) => {
    const hobbies = [];

    for (const person of people) {
        for (const hobby of person.hobbies) {
            if (!hobbies.includes(hobby)) {
                hobbies.push(hobby);
            }
        }
    }

    return hobbies.length;
}

const countHobbies2 = (items) => new Set(
    items.flatMap((item) => item.hobbies)
).size;

const r = countHobbies2(data);
console.log(r);