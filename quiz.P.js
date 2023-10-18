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

// policz średnią wieku ludzi z warszawy

function avgAgeWarsaw(items) {
    let sum = 0;
    let counter = 0;

    for (const item of items) {
        if (["warszawa", "warsaw"].includes(item.city.toLowerCase())) {
            sum += item.age;
            counter++;
        }
    }

    return sum / counter;
}

const avgAgeWarsaw2 = (items) => {
    // filtrowanie (usuwanie niepotrzebnych)
    const warsawItems = items.filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()));
    // transformacje danych
    const ages = warsawItems.map((item) => item.age);
    // agregacja (sumowanie)
    return ages.reduce((acc, age) => acc + age) / ages.length;
}

const avgAgeWarsaw3 = (items) => {
    const ages = items
        .filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()))
        .map((item) => item.age)

    return ages.reduce((acc, age) => acc + age) / ages.length;
}


// nie potrzebnie robiony 2x filter, kosztowne i nieczytelne
const avgAgeWarsaw4 = (items) => items
    .filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()))
    .map((item) => item.age)
    .reduce((acc, age) => acc + age) / items.filter((item) => ["warszawa", "warsaw"].includes(item.city.toLowerCase()));


// const r = avgAgeWarsaw3(data);
// console.log(r);