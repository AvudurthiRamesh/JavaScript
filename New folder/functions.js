// You can use a function declaration or a function expression
// var x = add(4, 5);
// function add(a,b) {
//     return a+b;
// }
// console.log(x);


// function add(a,b)
// {
//     return a+b
// }

// let sum = add(2,3)
// console.log(sum);


// let x = myFunction(4, 3);   // Function is called, return value will end up in x

// function myFunction(a, b) {
//   return a * b;             // Function returns the product of a and b
// }
// console.log(x);



const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  console.log(person1);



