function user(name, age, work) {
    return {
        name, 
        age,
        work,
        fullIntro() {
            console.log(`My name is ${name} i'm ${age} years old, & i'm a ${work}`);
        }
    }
}

const huxn = user("HuXn", 17, "Programmer")
huxn.fullIntro()