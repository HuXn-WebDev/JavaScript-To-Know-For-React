const symbol1 = Symbol("name")
const symbol2 = Symbol("name")

console.log(symbol1);
console.log(typeof symbol1);
console.log(symbol1 === symbol2);

const huxn = {}
huxn.age = 17
huxn["gender"] = "male"
huxn["female"] = "female"
huxn[symbol1] = 'Alex'
huxn[symbol2] = 'John'
console.log(huxn);
