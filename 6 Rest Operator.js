function user(...userData) {
    console.log(userData);
}

user("HuXn", 17, "Male", "Programming")


// ---------------------------
function double1(...numbers) {
    let output = []
    for (let i = 0; i < numbers.length; i++) {
        let result = numbers[i] *2
        output.push(result)
    }
    return output
}

console.log(double1(1,2,3,4,5));
// ---------------------------

// ---------------------------
double = (...numbers) => numbers.map(num => num *2)
console.log(double(1,2,3,4,5));
// ---------------------------
