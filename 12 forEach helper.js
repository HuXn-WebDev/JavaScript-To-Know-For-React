////////////////////////////////////////////////
let colors = ['teal', 'blue', 'red', 'green']

// for (var i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
// }

colors.forEach(color => console.log(color))
////////////////////////////////////////////////

let numbers = [1,2,3,4,5,6,7]
let sum = 0

numbers.forEach(number => (sum += number))
console.log(sum);
