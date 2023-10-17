const data = [
    {
        name: 'pawel',
        city: 'krakow',
        age: 38,
        hobbies: ['js', 'python', 'drugs']
    },
    {
        name: 'pawel',
        cite: 'Wroclaw',
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

const result = calculateAvgAge(data);
console.log(result);