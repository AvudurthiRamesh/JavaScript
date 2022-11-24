// Arithmetic operator +,-,*,**,%,/
// let x=30,y=2;
// console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x**y);
// console.log(x%y);
// console.log(x/y);

// Assignment opearator
// let x=10,y=20;
// console.log(x += y);  //x = x + y
// console.log(x -= y);  //x = x - y
// console.log(x *= y);  //x = x * y
// console.log(x /= y);  //x = x / y
// console.log(x %= y);  //x = x % y

// Comparison Operators
// let x= 20, y=10;
// console.log(x>y);
// console.log(x<y);
// console.log(x==y);
// console.log(x<=y);


// logical operator ==,===,!=,!==,>,<
// let a= true, b= false
// console.log(a&&b);
// console.log(a||b);
// console.log(a!=b);

// the differences is that == is not check for the types
// but === it will check for the types
// let str = "1";
// let num = 1;
// console.log(str==num);
// console.log(str===num);
// != is not check for types 
// !== is check for the types
// console.log(str != num);
// console.log(str !== num);

// Ternary operator
// condition ? true: false;
// 5 == '5' ? console.log("true"):console.log("false");
// 5 === '5' ? console.log("true"):console.log("false");


// Conditional statement
//Conditional statements are used to perform different actions based on different conditions.

// if statement : Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
// let person_age = 15;
// if (person_age>=18) {
//     console.log("eligible for vote");
// }

//else Statement : Use the else statement to specify a block of code to be executed if the condition is false.
// if (person_age>=18) {
//     console.log("eligible for vote");
// }
// else {
//     console.log("not eligible for vote");
    
// }

//else if Statement : Use the else if statement to specify a new condition if the first condition is false.
// let env = "eee"; 

// if (env == "QA") {
//     console.log("QA");
// } 
// else if (env == "dev") {
//     console.log("dev");
// } 
// else  (env == "UAT")
// {
//     console.log("UAT");
// }

//Switch Statement
//Use the switch statement to select one of many code blocks to be executed.
//break keyword, it breaks out of the switch block.
//The default keyword specifies the code to run if there is no case match:
// let env = "XXX";
// switch (env) {
//     case "dev":
//         console.log("dev"); 
//         break;
//     case "QA":
//         console.log("QA");
//         break;
//     case "UAT":
//         console.log("UAT");
//         break;
//     case "Prod":
//             console.log("Prod");
//             break;
//     default:
//         console.log("QA");
//         break;
// } 