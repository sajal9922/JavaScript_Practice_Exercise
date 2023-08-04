

// Hour
// If hour between 6 and 12 message 'good morning'
// if Hour hetween 12 and 6 message 'good afternoon'
// Else message 'good evening'.

// structure of if else statement
/*
if(condition){
  statememnts;
}
else if(another condition){
  statments;
}
else{
  statements;
}

// Example

let hour = 24;

if (hour >= 6 && hour < 12)
  console.log('Good Morning');
else if (hour >= 12 && hour < 18)
  console.log('Good Aftenoon');
else
console.log('Good evening'); 

*/

// --------switch...case----------

/*
// Use break; otherwise it will execute rest of the statements.

let  role = 'moderator';
switch (role){
  case 'guest':
    console.log('Guest user');
    break;
  case 'moderator' :
    console.log('Moderator user');
    break;
  default :
    console.log('Unknown Role');
}
*/

/*
// same result with if...else statement

let role = 'moderator';

if (role === 'guest')
  console.log('Guest user');
else if (role === 'moderator')
  console.log('Moderator user');
else 
  console.log('Unknown user');
  
*/

// -------------For Loop---------------

// for (let i = 1; i <= 5; i++)
//   if (i % 2 !== 0)
//     console.log(i);


// ----------------While Loop----------------

// let i = 0;

// while (i < 10){
//   if (i % 2 !== 0)
//     console.log(i);
//     i++;
// }



// -----------------do...while loop--------------------

// do while loop will at least execute once before check the condition.

/*
let i = 9;

do {
  if (i % 2 !== 0)
    console.log(i);
    i++;

}
while (i < 5);

*/

//---------------- for-in loop ----------------

// for-in loop used for iterate the properties 
// of an objects or elements of an array.

/*
const person = {
  name : 'sajal',
  age : 35
};

for (let key in person)
console.log(key, person[key]);

const color = ['red', 'blue', 'green'];

for(let index in color)
console.log(index, color[index]);

*/

// -------------for-of loop-----------

// for-of loop is the ideal way for iterate over an Array

const colors = ['red', 'blue', 'green'];

for(let color of colors)
console.log(color);

