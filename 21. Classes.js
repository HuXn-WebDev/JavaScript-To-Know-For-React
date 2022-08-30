// Classes are one of the features introduced in the ES6 version of JavaScript.
// A class is a blueprint for the object. You can create an object from the class.

// You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

// Since many houses can be made from the same description, we can create many objects from a class.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

const huxn = new Person("HuXn", "WebDev");
console.log(huxn);

// Inheritance
class Programmer extends Person {
  constructor(firstName, lastName, pl, experience) {
    super(firstName, lastName); // This just calles the parent class constructor
    this.pl = pl;
    this.experience = experience;
  }
}

const john = new Programmer("John", "Doe", "JavaScript", 12);
console.log(john);
console.log(john.greeting());
