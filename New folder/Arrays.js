// An array is a special variable, which can hold more than one value:
// Example
//  const cars =["BMW","SHIFT","SAAB"];
// console.log(cars);


//  access an array element by referring to the index number:
// example
// console.log(cars[2]);
// console.log(cars[0]);
// console.log(cars[1]);


// Changing an Array Element
// Example
// cars[2]='range'
// console.log(cars);


// we can have variables of different types in the same array
// Example
// let myarray = [100,"welcomw",10.15,true]
// console.log(myarray);


// Arrays are Objects
// Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays
// let person1 = {
//     Name : "Narmada",
//     age : 27

// }
// let person2 = {
//     Name : "Naveen",
//     age : 27

// }
// let myarray1 = [person1,person2];
// console.log(myarray1);
// console.log(myarray1[1]);

// Length of an array
// The length property of an array returns the length of an array (the number of array elements)
// let fruits =["Banana","orange","Apple"];
// console.log(fruits.length);

// Accessing the First Array Element
// let fruit = ["Banana","orange","Apple"];
// let x = fruit[0];
// console.log(x);

// Accessing the Last Array Element
//  let chocolate =["kitkat","dairymilk","strawberry"];
// let x = chocolate[chocolate.length-1];
// console.log(x);

// Looping Array Elements
// we can read the data  individual by using the loop statement
// let chocolate =["kitkat","dairymilk","strawberry"];
// for (let i = 0; i <= chocolate.length-1; i++) {
//     console.log(chocolate[i]);
    
// }


// JavaScript new Array()
// const points = new Array();
// const points1 = new Array(40);
// console.log(points1);
// const points = [];
// const points = [40];
// console.log(points);


// Methods
// toString() 
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toString());

// pop()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.pop());

// push()
// let fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.push( "Lemon"));
// console.log(fruits);

// shift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.shift());

// unshift()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.unshift("Lemon"));
// console.log(fruits);

// concat() : The concat() method concatenates (joins) two or more arrays.
// let arr1 = ["Cecilie", "Lone"];
// let arr2 = ["Emil", "Tobias", "Linus"];
// let children = arr1.concat(arr2);
// console.log(children);

//delete()
// let name = ["sss","ddd","eeee"]
// delete name[1];
// console.log(name);

// slice()
// let name = ["sss","ddddd","www"]
// console.log(name.slice(0,2));
// console.log(name.slice(1));

// sort()
// let name = ["sss","ddd","eeee"]
// console.log(name.sort());

// reverse()
// let name = ["sss","ddd","eeee"]
// console.log(name.reverse());