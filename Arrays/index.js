/* 

// Adding elements to an array.

const number = [3, 4];
console.log(number);

// Adding  element to the end of an array..
number.push(5, 6);
console.log(number);

// Adding element at the begining of an array..
number.unshift(1, 2);
console.log(number);

// Adding element in the middle of an array..
number.splice(2, 0, 'a', 'b');
console.log(number);

*/

/*

// Finding an element in array (Primitives)

const number = [1, 2, 3, 1, 4];

// indexOf()=> if the element exist it returns index 
//of given elements else returns -1.
console.log(number.indexOf(1));
console.log(number.indexOf('a'));
// lastIndexOf returns the last index of given elements
console.log(number.lastIndexOf(1));

// includes method returns true if the given element exists in array..
console.log(number.includes(1));
console.log(number.includes('a'));

// All of this method has second from index
// From where search will begin.  
console.log(number.includes(1, 2));
console.log(number.indexOf(1, 3));

*/

/*

// Finding an element in array (Reference type)

const courses = [ 
  {id: 2, name: 'b'},
  {id: 1, name: 'a'},
];

// find method returns the object if it exist in an array
// else returns Undifined
// When it found the first match it will stop searching..
const course = courses.find(function(course){
  return course.name === 'a';
});
console.log(course);

//findIndex returns the index of exitisting objects.
const course1 = courses.findIndex(function(course){
  return course.name === 'a';
});
console.log(course1);

// Implementing arrow function..
const course2 = courses.findIndex((course) =>  course.name === 'a');
console.log(course2);
*/

/*

// Removing elements from an array....

const number = [1, 2, 3, 1, 4];

// Removing last element of an array..
const last = number.pop();
console.log(number);
console.log(last);

// Removing first element of an array..
const first = number.shift();
console.log(number);
// Removing  element from middle of an array..
const middle = number.splice(2, 2);
console.log(number);
console.log(middle);
*/

/*
// Empty an array...

let number = [1, 2, 3, 1, 4];
let another = number;

// solution 1
// number = []; // if there is no other reference array

// solution 2
number.length = 0; // with multiple reference

// solution 3
// number.splice(0, number.length); // with multiple reference

// solution 4 not recommended.
// while(number.length > 0)
// number.pop();

console.log(number);
console.log(another);
*/

/*
// Combanding and slicing an array..
// With premitive type it copied their value
// With referense type(like objects) it coppies references.

const first = [{id: 1}, 2, 3];
const second = [4, 5, 6];

// const combind = first.concat(second);

// Spread operator...
const combind = [...first, 'a', 'b', ...second, 'c'];

console.log(combind);

const slice = combind.slice(0, -3);
console.log(slice);

// Copy an array..
// const copy = combind.slice();
const copy = [...combind];
console.log(copy);

*/

/*

// Iterating an array....

// With for-of loop...

const numbers = [1, 2, 3, 4];

for(let number of numbers)
console.log(number);

// forEach method..
// for-of loop does not have index parametre
// forEach can take two parameter (elememnt and index)
numbers.forEach((number, index) => console.log(index, number));
*/

/*
// joining an array...

const number = [1, 2, 3, 4];

// join method combineds an array and returns a string.

const joined = number.join(' .-. ');
console.log(joined);

// split method breaks sets of string and returns an array..

const message = 'this is my first message.';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);

*/

/*

// Sorting an array with numbers and atrings...

const number = [2, 4, 1, 3];

// sort method
console.log(number.sort());

// reverse method
console.log(number.reverse());

// Sorting an array with Objects...

const courses = [
  {id: 1, name: 'Node.js'},
  {id: 2, name: 'javaScript'},
  {id: 3, name: 'anguler'},
];

courses.sort(function(a, b){
// a < b => -1
// a > b => 1
// a === b => 0

const nameA = a.name.toUpperCase();
const nameB = b.name.toUpperCase();

if(nameA < nameB) return -1;
if(nameA > nameB) return 1;
return 0;
});

console.log(courses);
*/
/*
// Testing the elements of an array..

const number = [-1, -1, 5, 6, 3];

// every() checks every element of an array matches given criteria
// And retutns a boolean
const allPositive = number.every(function(value){
  return value >= 0;
});

console.log(allPositive);

// some() checks at least one element of an array matches given criteria
// And retutns a boolean
const atLeastOnePositive = number.some(function(value){
  return value >= 0;
});

console.log(atLeastOnePositive);
*/

/*
// Filtering .... And Maping an an array.....


const number = [-1, -1, 5, 6, 3];

const filtered = number.filter(value =>  value >= 0);
console.log(filtered);

// Maping an array.....
// map() method takes a call-back function
// it takes value of an array and returns an array of string or object and so on..
// it does not modify the original array,

const items = filtered.map(value => '<li>' + value + '</li>');
console.log(items);
const item2 = filtered.map(value => ({item: value}));
console.log(item2);
const html = '<ul>' + items.join('') + '</ul>';
console.log(html);

// Chaining...
// Cos' filter() and map() method returns a new array dose not modify original
// so we can call one after another without storing there value into a variable
// this is call chainiing...

const number2 = [-1, -1, 5, 6, 3];

const chainedItems =
number2
  .filter(n => n >= 0)
  .map(n => ({value: n}))
  .filter(obj => obj.value > 3)
  .map(obj => obj.value);

console.log(chainedItems);
*/

// Reduce() method....
// it reduce all the elements into an value..

const number = [-1, -1, 5, 6, 3, 10];

// Accumulating
let sum = 0;

for (let n of number) sum += n;

console.log(sum);

// reduce() method...
// it takes two argument..
// a call-back function
// initial value of accumulator
// We can remove the second argument, then accumulator
// will take the first value of the given array..

const sumOfArray = number.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

// cleaner way of writing...
const sumOfArray2 = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumOfArray2);
