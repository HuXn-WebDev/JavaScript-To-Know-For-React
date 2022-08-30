const set = new Set()

set.add()
set.add('string')
set.add({name: "huxn"})
set.add(10)

console.log(set.size);
console.log(set.keys());
console.log(set.has({name: 'huxn'}));

set.delete(10)
console.log(set);

for (let item of set) {
    console.log(item);
}
