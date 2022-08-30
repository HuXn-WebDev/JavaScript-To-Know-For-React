// Filter
const songs = [
    {name: "Lucky You", duration: 4.34},
    {name: "Just Like You", duration: 3.23},
    {name: "The Search", duration: 2.33},
    {name: "Old Town Road", duration: 1.43},
    {name: "The Box", duration: 5.23},
]

// Ex. 2
const computers = [
    {ram: 4, hdd: 100},
    {ram: 8, hdd: 200},
    {ram: 16, hdd: 300},
    {ram: 32, hdd: 400},
]

console.log(computers.filter(com => com.ram > 16));