// function Developer() //defining Developer as constructor
// {
//     this.name = 'Ram'
//     this.tools = 'javascript'
//     console.log(this.tools) // it will prints javascript
// }

// const c = new Developer() //creating an object for constructor
// console.log(c.name) // printing name with the help of object
// console.log(this.tools) // it will prints undefined as we are calling out of scope

//#################################################################

//JavaScript Object Prototype
// constructor function
// function Person () {
//     this.name = '',
//     this.age = 23
// }

// // creating objects
// let person1 = new Person();
// let person2 = new Person();

// // adding new property to constructor function
// Person.prototype.gender = 'Male';

// console.log(person1.gender); // Male
// console.log(person2.gender); // Male

//#################################################################

//JavaScript Built-in Constructors
let a = new Object();    // A new Object object
let b = new String();    // A new String object
let c = new Number();    // A new Number object
let d = new Boolean();   // A new Boolean object

const name = new String ('Ramana');
console.log(name); // prints Ramana

const number = new Number (10);
console.log(number); // 10

const count = new Boolean(true);
console.log(count); // true