let numbers = [1,2,3,4,5]
let double = numbers.map(num => num*2)
console.log(double);

let person = [
    {firstName: "Macom", lastName: "Reynolds"},
    {firstName: "Kaylee", lastName: "Frye"},
    {firstName: "Jayne", lastName: "Cobb"},
]

const results = person.map(person => {
    let fullName = [person.firstName, person.lastName]
    return fullName
})

console.log(results);