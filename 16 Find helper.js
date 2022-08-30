//////////////////////////////////////////////////////
const peoples = [
    {name: 'huxn', age: 17},
    {name: 'john', age: 18},
    {name: 'alex', age: 20},
    {name: 'jimmy', age: 30},
    {name: 'alex', age: 30},
]

const res = peoples.find(person => person.name === 'alex')
// const filterRes = peoples.filter(person => person.name === 'alex')
// console.log(filterRes);
console.log(res);

//////////////////////////////////////////////////////
const posts = [
    {id:1, content: "Good Post"},
    {id:1, content: "funny Post"},
    {id:1, content: "sad Post"},
]

const postRes = posts.find(post => post.content === 'funny post')
console.log(postRes);
//////////////////////////////////////////////////////