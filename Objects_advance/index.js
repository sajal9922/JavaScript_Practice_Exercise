/*
// Creating an Object with Factory function and Cojnstructor function.

// Factory function

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('draw.');
    },
  };
}

const circle = createCircle(1);
console.log(circle);

// Constructor function

// Naming convention 'Pascal Casing'

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log('draw.');
    });
}

const another = new Circle(1);
console.log(another);

*/

/*
// Adding and Removing properties of an Object

function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log('draw.');
    });
}

const circle = new Circle(1);

// Dot notation

circle.location = { x: 1 };

// Bracket notation
//It used when the properties created on runtime
//Or name is not a valid identifire, like the properties has
// space or special charecter in it.
circle['position'] = { y: 2 };

// deleting a properties from an object.
// Using delete operator
// Dot notation or bracket notation.

delete circle.location;
delete circle['position'];
console.log(circle);
*/

/*
// Enumerating Properties of an Object.
function Circle(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log('draw.');
    });
}

const circle = new Circle(12);

// for-in loop enumerate over each key of an object.

for (let key in circle) {
  //Useing 'typeof' operator isolating method from an object
  if (typeof circle[key] !== 'function') console.log(key, circle[key]);
}

// Object.keys returns all the key of an object as an array
const keys = Object.keys(circle);
console.log(keys);

// in operator checks is there given property or method exist in an object

if ('radius' in circle) console.log('Circle has radius');
*/

/*
// Private Properties and Methods
// By defining properties as a local variable
function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  let computeOptimumLocation = function (factor) {
    console.log(factor);
  };
  (this.radius = radius),
    (this.draw = function () {
      computeOptimumLocation(3.9);
      console.log('draw');
    });
}

const circle = new Circle(3);
console.log(circle);
console.log(circle.draw());
*/

// Getter and Setter

function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };

  (this.radius = radius),
    (this.draw = function () {
      console.log('draw');
    });
  // To define a getter/setter, use Object.defineProperty():

  Object.defineProperty(this, 'defaultLocation', {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error(' something Wrong');
      defaultLocation = value;
    },
  });
}

const circle = new Circle(3);
circle.defaultLocation = { x: 2, y: 1 };
console.log(circle);
console.log(new Date());
