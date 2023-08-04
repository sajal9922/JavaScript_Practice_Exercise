/* 
// 01-Array from range..
// It takes min and max value and form an array..

console.log(arrayFromRange(2, 10));

function arrayFromRange(min, max) {
  const array = [];
  for (i = min; i <= max; i++) array.push(i);
  return array;
}
*/

/*
// 02- Includes method...
// if the given element exist in given array returns true else returns false.

const number = [1, 2, 3, 4, 5];
console.log(includs(number, 2));

function includs(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}
*/

/*

const number = [1, 5, 2, 3, 4, 2, 3, 1, 4, 1, 5];

const output = except(number, 2);
console.log(output);

function except(array, exclud) {
  const output = [];
  for (let element of array) if (element !== exclud) output.push(element);
  return output;
}
*/

/*
// 03 moving an element of an array to a given position.

const number = [1, 2, 3, 4, 5];

const output = move(number, 3, -1);
console.log(output);

function move(array, index, offset) {
  const position = index + offset;
  const output = [...number];
  if (position >= output.length || position < 0) {
    console.error('Invalid position.');
    return;
  }
  const element = output.splice(index, 1)[0];
  output.splice(position, 0, element);
  return output;
}
*/

/*
// 04-How many times the given element exist in an array....

const number = [1, 5, 2, 3, 4, 2, 3, 1, 4, 1, 5];
const count = countOccurrences(number, 1);
console.log(count);

function countOccurrences(array, searchElement) {
  // let count = 0;
  // for (let element of array) if (element === searchElement) count += 1;
  // return count;

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return occurrence + accumulator;
  }, 0);
}
*/

/*

// 05- max value of an array...

const number = [1, 5, 2, 3, 4, 2, 20, 100, 4, 1, 5, 10];
const max = getMax(number);
console.log(max);

function getMax(array) {
  if (array.length === 0) return undefined;
  // let maxNumber = array[0];
  // for (let element of array)
  //   maxNumber = maxNumber >= element ? maxNumber : element;
  // return maxNumber;

  // return array.reduce((accumulator, current) => {
  //   return current > accumulator ? current : accumulator;
  // });

  return array.reduce((a, b) => (a > b ? a : b));
}
*/

// 06-Movie exercise....

const movie = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 4.8 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// all the movie year 2018 rating more than 4
// sort then in desending order by there rating
// get the movie title.

// console.log(sortMovie(movie));

// function sortMovie(obj) {
//   const sortArray = obj.filter((obj) => obj.year === 2018 && obj.rating > 4);
//   console.log(sortArray);
//   const desendingOrder = sortArray.sort(function (a, b) {
//     if (a.rating < b.rating) return 1;
//     if (a.rating > b.rating) return -1;
//     return 0;
//   });
//   console.log(desendingOrder);
//   return desendingOrder.map((obj) => obj.title);
// }

const title = movie
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);
console.log(title);
