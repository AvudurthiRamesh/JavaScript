/*
// let message = 'Java'; // let's scope is block level
// console.log(message); 
// var count = 100; //var's scope is function level
// console.log(count)
// const number = 123 //const cant be changed
// console.log(number)
*/

/*
//##################### program to show the change in global variable ###########################
let a = "cypress"; //defining cypress as global variable
function tool() // defining function tool
{
       a = "selenium"; // without let and var also we can define a variables
}
console.log(a); //before the function call (out of the function) it will prints global variable "cypress"
tool();
console.log(a); //after the function call it will prints global variable "selenium"
*/
//#############################################################################################*/

/*####################### program showing local scope of a variable ###############################
let a = "Java"; // defining global variable
function language()  //defining function
{
    let b = "Scripting" // defining local variable, which can be access inside the function only
    console.log('second print this '+a); //we can access global variable inside the function
    console.log('Third print this '+b); // we can access local variable inside the function as its scope is function level
    console.log('last print '+ a + b); // Global and Local variables can be accessible
}
console.log('first print this '+ a); //we can access global variable outside of the function also
language();
console.log(a + b); // it will throw error as we are accessing local variable out of scope
//#############################################################################################*/



/*//################### program showing Block scope of a variable ##############################
//Global variable
let a = 'SQL';
function Database() 
{
    // local variable
    let b = 'PostGress';
    console.log('first '+a + ' ' + b);
    if (b == 'PostGress') 
    {
        // block-scoped variable
        let c = 'MongoDB';
        console.log('If block '+a + ' ' + b + ' ' + c);
    }
    // variable c cannot be accessed here as it wad declared at block level
    console.log("while printing a +  + b +  + c, it should through error as we are accessing c which is block level variable");
    console.log(a + ' ' + b + ' ' + c);
}
Database();
*/

// a = 5;
// console.log(a);
// var a =20
// console.log(a);
// //let a = 1
// //console.log(a);



// function check()
// {
//     let fname = 'ramesh'
//     var lname = 'Avudurthi'
//     company = 'Senecaglobal'
//     const Id = 'N0001'
//     console.log(fname)
//     console.log(lname)
//     console.log(company)
//     console.log(Id)
// }
// if (true)
// {
//     let fname = 'rrrrr'
//     var lname = 'aaaa'
//     company = 'SumT'
//     const Id = 'N1001'
//     console.log(fname)
//     console.log(lname)
//     console.log(company)
//     console.log(Id)
// }
// let fname = 'sss'
//     var lname = 'www'
//     company = 'adc'
//     const Id = 'N1101'
//     console.log(fname)
//     console.log(lname)
//     console.log(company)
//     console.log(Id)
// check();

// let fname = 'sss'
//     var lname = 'www'
//     company = 'adc'
//     const Id = 'N1101'
//     console.log(fname)
//     console.log(lname)
//     console.log(company)
//     console.log(Id)

// var a = 'ramesh'
// var a = 'ram'
// let b = 'abcd'
// //let b = 'xyz'
// console.log(a)
// console.log(b)


// var a = 'ghgjhg'
// var c = 'tyty'
// console.log(c)
// console.log(a)

//if we want to know what is the datatype we use typeof method
var a =10
var b=10.5
var c = true
var d = 'ramesh'
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
console.log(typeof d)