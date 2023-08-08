/*
// Function Declaration....
// It is possible to call a function declaration is declaration..
// because is hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.

walk();

function walk() {
  console.log('Walk.');
}

// Anonymous function Expression....
// Named function Expressiion...., if there is a name of the function

const run = function () {
  console.log('Run.');
};
// both move and run is referensing to the same function.
const move = run;
run();
move();
*/

/*
// Argumemnts....

// To work with multiple arguments of a function
// use arguments keyword.

function sum() {
  console.log(arguments);
  let total = 0;
  // arguments object has iterator so we can use for-of loop.
  for (let value of arguments) total += value;
  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 10));*/

/*
// Rest operator(...)
// Rest operator will take multiple arguments and put into an array.

function sum(...arg) {
  console.log(arg);
  return arg.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4, 5, 6, 10));

// Rest parameter should be the last parameter of a function.
// That's why it called rest operator.
function totalPrice(discount, ...price) {
  console.log(price);
  const total = price.reduce((a, b) => a + b);
  return (1 - discount) * total;
}

console.log(totalPrice(0.1, 1, 2, 3, 4, 5, 6, 10));
*/

/*
// Default Operator..
// Parameter that has default valut should be the last parameters..

function interest(principal, rate = 3.5, year = 5) {
  return ((principal * rate) / 100) * year;
}
console.log(interest(10000));
*/

/*

// getters and setters.....

// getters => get access to an objects
// setters => change or mutate them..

// const person = {
//   firstName: 'sajal',
//   lastName: 'moni',
//   fullName() {
//     return `${person.firstName} ${person.lastName}`;
//   },
// };

// console.log(person.fullName());

const person = {
  firstName: 'sajal',
  lastName: 'moni',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = 'zihua ren';

console.log(person.fullName);
*/

/*
// Error handling....

const person = {
  firstName: 'sajal',
  lastName: 'moni',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },

  // Reporting an error on a programing is called throw an exeption..
  set fullName(value) {
    if (typeof value !== 'string') throw new Error('Value is not a string.');
    const parts = value.split(' ');
    if (parts.length !== 2) throw new Error('Enter first and last name.');
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
try {
  person.fullName = 'e d';
} catch (e) {
  alert(e);
}

console.log(person.fullName);
*/

/*
// this keyword....

// If this keyword is part of amethod this references to the object.
// If this keyword is part of a function this references to the
// global object (window object for browser or global object for node.)

const video = {
  title: 'a',
  play() {
    console.log(this);
  },
};

video.stop = function () {
  console.log(this);
};

video.stop();

function playVideo() {
  console.log(this);
}

playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video('b');

*/

// Chaining this....

// Using self, call, bind, possible to this from global to local scope.
// using arrow function this will inherit for local objects..
// this is new and efficient way..

const video = {
  title: 'a',
  tags: ['a', 'b', 'c'],
  showTag() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

video.showTag();
