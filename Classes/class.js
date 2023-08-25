/*
class Circle {
  constructor(radius) {
    this.radius = radius;
    this.move = function () {
      console.log('move');
    };
  }
  // instance method
  draw() {
    console.log('draw');
  }

  // Static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}
const circle = Circle.parse('{ "radius": 1 }');
console.log(circle);
const c = new Circle(2);

// Class starts with 'class' keyword..
//Class creats a function with new key word
// Methods are out side of constructor block will be in the prototype
//Class does not Hoist. so it need to define first then you can call it.

// static methods. Is not acceseble to new function that created from it
// it is acceseble from directly from the class
// Using Static method we can make Utility function.

*/

// this keyword....
// Enable strict mode use the string 'use strict
// it will check more strictly all the code and this will prohibited to access to window Object
/*
'use strict';
const Circle = function () {
  this.draw = function () {
    console.log(this);
  };
};

const c = new Circle();
//method call
c.draw();
const draw = c.draw;

// function call
// 'this' will window object
// wiith strict mode it will be undefined.
draw();
*/

class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
// outcome 'undefined'
draw();
// Class always execute with 'strict' mode.
