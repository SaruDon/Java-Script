/*

Java script is dynamically typed
no need to tell what type of data we are storing inside varible

let, const & var
var: varibale can be re-declared & updated. A global scope variable.

let: Variables can not be re-declared but cam be updated. A block scope varible.

const: Vaaribles can not be redeclared or updated. A block scope variable.

*/

//Differn type of data stored
let name = " Tony Stark";
// age = 24;
price = 99.99;
radius=112
isFollow= false;

//there is differnce between null and undefined
x = null;
y = undefined
console.log(name);

/*
Datatypes in JS
Primitive:
Number, String, Boolean, Undefined, Null, Boolean, Null, BigInt, Symbol

Non Primitive:
Objects, Functions
*/


let age = 21
console.log(typeof age); // to get type of variables
console.log(typeof name, name)


//Non primitive datatypes
const  students ={
  fullName :"Sarvesh Khamkar",
  age:20,
  cgpa:8.9,
  isPass: true
}

console.log(students)
console.log(students.fullName) // to access the proterty of obj

//modify object
students.name ="Sarvesh Karekar"
students.age++;
console.log(students.age);
console.log(students.name)