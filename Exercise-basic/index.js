
// ----------------exercise--------------


//01-max of two numbers.....

// let maxNumber = max(15, 10);
// console.log(maxNumber);

/*
function max (a, b){
  if (a > b) return a;
   return b; // else is not required if the condition is true it will not execure rest of the code.

}
*/

/*
//Or..........
// Simple and clean way to write with ternery operators.
function max(a, b){
  return (a > b) ? a : b;
}

*/

/*
// 02-Landscape or Portrait.........

console.log(isLandscape(1000, 900));

function isLandscape(width, height){
  return (width > height);
}
*/
/*
// 03-FizzBuzz........

// divisible by 3 => Fizz
// Divisible by 5 => Buzz
// divisible by 3 and 5 => FizzBuzz
// not divisible by 3 and 5 => input
// not a number => not a number

const output = fizzBuzz('t');
console.log(output);

function fizzBuzz(input){
  if(typeof input !== 'number') return 'Not a Number';
  if((input % 3 === 0) && (input % 5 === 0) ) return 'FizzBuzz';
  if(input % 3 === 0) return 'Fizz';
  if(input % 5 === 0) return 'Buzz';
  else return input;

}
*/

/*
//04-Demerit points.............

// speed limit = 70 If driver drives 70 or less is ok.
// every 5 km over 70 driver gets 1 point
// if driver gets 12 points or more license will be suspended.

checkSpeed(90);

function checkSpeed(speed){
  const speedLimit = 70;
  const kmPerPoint = 5;
  if(speed < (speedLimit + kmPerPoint)){
    console.log('Ok');
  }
  else{
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
      console.log('License suspended');
    else
      console.log('Points:', points);
  }

}
*/

/*

// 05-EVEN-ODD number............

showNumber(10);

function showNumber(limit){

  for(let i = 0; i <= limit; i++){
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);

  }
}
*/

/*
// 06- count truthy value of an array.

const array = [0, null, 1, 2, NaN, false, 9, 4];
console.log(truthyValue(array));

function truthyValue(array){
  let count = 0;
  for(let value of array)
    if(value)
      count++;
  return count;
  
}
*/

/*
// 07-Show properties of an object that are strings

const person = {
  name: 's',
  age: 20,
  job: 'l',
  point:9,
  address: 'f'
};

showProperties(person);

function showProperties(object){
  for(let key in object){
    if(typeof object[key] === 'string')
    console.log(key, object[key]);
  }
}
*/

/*

// 08- sum of multiples of 3 and 5..

console.log(sum(10));

function sum(limit){
  let sum = 0;
  for(let i = 1; i <= limit; i++)
    if(i % 3 === 0 || i % 5 === 0 )
      sum += i;
   
  return sum;
}

*/


/*
// 09- grade exercise.......


const subjectmarks = [100, 70, 80, 90, 100, 80, 100];

console.log('Grade',grade(subjectmarks));


function grade(marks){
  const average = calculateAvarage(marks);
  console.log('Average', average);
  
  if(average < 60) return 'F';
  if(average < 70) return 'D';
  if(average < 80) return 'E';
  if(average < 90) return 'B';
  
  return 'A';
  
}

function calculateAvarage(array){
  let sum = 0;
  for(let value of array)
    sum += value;
  
  return sum / array.length;
}
*/

/*
// 10-show stars.....

showStars(20);

function showStars(stars){
  let star = '*';
  for(let i = 0; i < stars; i++){
    console.log(star);
    star += '*';
  }

}

*/



/*
// 11-Prime number....

primeNumber(10);

function primeNumber(limit){
  for(let number = 2; number <= limit; number++)
    if(isPrime(number)) 
      console.log(number);  
}

function isPrime(number){
    for(let factor = 2; factor < number; factor++)
      if(number % factor === 0)
        return false;
      return true;
}

*/
