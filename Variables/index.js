

// console.log('Hello world!')

// // Defining a variable

// let name = 'sajal';
// console.log(name);

// // rules for defining a variable.

// // It can not be resurved keyword
// // It should be meaningfull
// // Can not start with number exp. 1name
// // Can not contain space or hiphen (-)
// // They are case-sensitive

// let firstName = 'sajal';
// let lastName = 'moni';

// // Best practice is to assign a variable is using camel notation
// // And assign each variable individualy. 

// // ---------------Constant---------------

// const interestRate = 0.3;
// console.log(interestRate);

// // Assign a variable as a constant if it's shouls not be changed.


// // Primitives or value type variable.

// let name = 'sajal'; // String Literal
// let age = 35;       // Numble Literal
// let isApproved = true; // Boolean
// let firstName = undefined;// Undefined value 
// let lastName = null;//null value


// ----------------- Objects--------------

/*
let person = {
  name: 'sajal',
  age: 35
};

console.log(person);

// Dot Notation
person.name = 'Zafir';
console.log(person.name);
console.log(person);

// Bracket Notation
person['name'] = 'Ren';
console.log(person.name);
console.log(person);
*/


// -----------------------Array---------------------
// Array is a variable that can store list of itemd

/*
let selectedColor = ['red', 'blue']; // Array Literal
console.log(selectedColor);
selectedColor[2] = 'green';
console.log(selectedColor);
console.log(selectedColor.length);
*/

// ----------------------Functions---------------


//Executing a task
function greet(name, lastName){
  console.log('hello' + ' ' + name + ' ' + lastName);
}
greet('sajal', 'moni');

// Calculating a value

function square(number){
  return number * number;
}
console.log(square(2));
let number = square(2);
console.log(number);