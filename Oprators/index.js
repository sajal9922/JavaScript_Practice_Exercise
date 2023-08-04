
/*
let x = 5;
let Y = 3;

// -------------Arithmetic operators------------
// console.log(x + Y);
// console.log(x - Y);
// console.log(x * Y);
// console.log(x / Y);
// console.log(x % Y); // Remeinder operator
// console.log(x ** Y); // Exponenciesion operator

// Increament Operator (++)
//console.log(++x); // First increase x value by 1 and display
// console.log(x++); // first display the value of x the increase the value of x
// console.log(x);

// Decreament Operators (--)
console.log(--x); // First decrease x value by 1 and display
*/


/*
// --------------assignment Operators---------------

let x = 10;

x = x + 3;

// shorthand...
x += 3; // Similer with all other operators.

*/

/*

// ----------- Comparison Operators---------–

let x = 1;

// Relational Operators

console.log(x > 0);
console.log(x >= 0);
console.log(x < 0);
console.log(x <= 1);

// Equality Operators

console.log(x === 1);
console.log(x !== 1);
*/


/*
// Strict Equality Operators (Both type and value are same)

console.log(1 === 1);
console.log('1' === 1);

// Lose Equality operators ( Only checks the value)

console.log(1 == 1);
console.log('1' == 1);
console.log(true == 0);
*/

// ------------ Ternery Operator-------------–


/*
//If the customer has more than 100 points is a Gold customer
// otherwise Silver customer

let points = 90;

let type = points >= 100 ? 'Gold' : 'Silver';
// if the condition is true it will take the first value 
//otherwise it will take the second value.
console.log(type);
*/


//------------Logical Operators----------

/*

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true);
console.log(false && true);

// let highIncome = true;
// let goodCreditScore = true;
// let EligibleForLoan = highIncome && goodCreditScore;
// console.log(EligibleForLoan);

// Logical OR (||)
// If one of the operands is TRUE
// let highIncome = false;
// let goodCreditScore = true;
// let EligibleForLoan = highIncome || goodCreditScore;
// console.log(EligibleForLoan);

// NOT Operator (!)
// It will change the value to oposit;


let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log('Eligible for loan', eligibleForLoan);

let applicationRefuse = !eligibleForLoan;
console.log('Aplication refused', applicationRefuse);
*/


// Falsy value (false)

// Undefined
// null
// 0
//false
// NaN

// Everything else are not falsy value is truthy.

// Short circuiting

// Setup a default value using Or operator.

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor);

