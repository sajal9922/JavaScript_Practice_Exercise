/*

// 01- A function can takes multiple parameter
// An array and returns sum of numbers.

// function sum(number) {
//   if (!Array.isArray(number)) {
//     let total = 0;
//     for (let value of arguments) total += value;
//     return total;
//   }
//   return number.reduce((a, b) => a + b);
// }

function sum(...items) {
  if (items.length === 1 && Array.isArray(items[0])) items = [...items[0]];
  return items.reduce((a, b) => a + b);
}
console.log(sum([1, 2, 3, 4, 5, 9, 8, 15]));

*/

/*
//02 - Area of circle..

const circle = {
  radius: 2,

  // getter is a read only property
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};

// circle.radius = 9;

console.log(circle.area);
*/

// 03 - Error Handling..

const number = [1, 5, 2, 3, 4, 2, 3, 1, 4, 1, 5];
// const count = countOccurrences(number, 1);
// console.log(count);

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) throw new Error('its not an array.');
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return occurrence + accumulator;
  }, 0);
}

try {
  const count = countOccurrences(true, 1);
  console.log(count);
} catch (e) {
  console.log(e.message);
}
