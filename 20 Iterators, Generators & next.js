///////////////////////////////////////////////////////////
// Iterable
const peoples = ["john", 'alex', 'huxn', 'jordan']

// Iteration
for (const x of peoples) {
    console.log(x);
}


let itterPeople = peoples.entries()
// next() -> {value: value, done: boolean}
console.log(itterPeople);
console.log(itterPeople.next());
console.log(itterPeople.next());
console.log(itterPeople.next());
console.log(itterPeople.next());
console.log(JSON.stringify(itterPeople.next()));
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function* generateIterator() {
    console.log('Generator Start - First Time');
    yield 1; // pause generator
    console.log('Generator Start - Second Time');
    yield 2 
}

const iteratorFunc = generateIterator()
console.log(iteratorFunc.next());
console.log(iteratorFunc.next());
console.log(iteratorFunc.next());
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function* peoples() {
    yield "John"
    yield "Alex"
    yield "HuXn"
}

const iter = peoples()
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
///////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
function* counter() {
    let i = 0
    while(true) {
        yield i++
    }
}

const count = counter()
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
console.log(count.next());
///////////////////////////////////////////////////////////