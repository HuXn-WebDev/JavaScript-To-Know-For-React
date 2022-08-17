// Spread on Arrays
let peoples = ['huxn', 'john', 'alex']
// console.log('kumar', ...peoples, 'john doe');
let friends = ['jordan', 'frad', 'brad', ...peoples]
console.log(friends);

// Spread on Objects
let person = {
    name: 'HuXn',
    age: 17,
    gender: "Male"
}

const clone = {...person, work: "Programming", location: "idk"}
console.log(clone);