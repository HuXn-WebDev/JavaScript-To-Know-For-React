// for (initalExpression; condition; increment) {}
// for (let key in object) {}

let person = {
    name: "HuXn",
    age: 17,
    gender: "Male"
}

for (let key in person) {
    console.log(key, person[key]);
}

let list = ['one', 'two', 'three', 'four']

for (let index in list) {
    console.log(`${index}: ${list[index]}`);
}