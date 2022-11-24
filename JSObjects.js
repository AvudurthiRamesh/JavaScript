// creating employee object with name and role
/*const student =
{
    //Key: 'Value'
    name: 'Ramesh',
    education: 'Graduate',
}
console.log(typeof student) // checking what is the type of employee, it should print Object
console.log(student) // it should print name and role
console.log(student.name) // it should print Ramesh
*/

// creating employee object with name and role and Creating nested Object with skills
/*const employee =
{
    name: 'Ramesh',
    role: 'developer',
    skills: {
        java: 1.8,
        SQL: 2016
    }
}
console.log(typeof employee)
console.log(employee)
console.log(employee.name)
console.log(employee.skills)
console.log(employee.skills.java)
*/


/*
//Creating Object Methods
const hrms =
{
    //Key: 'Value'
    module: 'KRA',
    api: 'Sai',
    ui: 'Nagendra',
    QA: 'Ramesh',
    test: function test()
    {
        console.log('api developer is '+ hrms.api)
    console.log('UI developer is '+ hrms.ui)
    console.log('QA is '+ hrms.QA)
        console.log('Testing is completed for KRA')

    }
}
//if we call test() method usually it should execute code inside the function
//but here it will throw error as we defined the function inside the Object

//test();//throws error

//we are calling same test function with the help of object hrms.
 //here the code will be executed inside the function
hrms.test();
*/



const person = {
    name: 'Ram',
    age: 30,
    
    // accessing name property by using this.name
    greet: function()
     {
          console.log('The name is' + ' ' + this.name);
     }
};
person.greet();