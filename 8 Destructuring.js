// Arrays
let peoples = ['huxn', 'john', 'alex']

let [huxn, john, alex] = peoples
console.log(huxn, john, alex);

// Object
let person = {
    name: "HuXn",
    age: 17,
    gender: "Male"
}

// let {name, age, gender} = person
// console.log(name, age, gender);

// Functions
function fullintro({name, age, gender}) {
    console.log(`
        Name: ${name}
        Age: ${age}
        Gender: ${gender}
        `);
}

fullintro(person)