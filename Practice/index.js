// Object Literal
/*
const circle = {
  radiur: 1,
  location: {
    x: 1,
    y: 3,
    z: 5,
  },
  draw: function () {
    console.log('Draw a circle.');
  },
};
circle.draw();

// Factory function to creat object

function creatCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log('Draw another circle.');
    },
  };
}
const anotherCircle = creatCircle(3);

console.log(`${anotherCircle.draw()} Whitch radius is ${anotherCircle.radius}`);

// Constructor function to creat an object.

function Circle(radius) {
  let area = 10;
  // Instance Members
  this.radius = radius;
  //Object.defineProperty(obj, prop, descriptor)

  Object.defineProperty(this, 'area', {
    get: function () {
      return area;
    },
    set: function (value) {
      if (value <= 0) throw new Error('Error.');
      area = value;
    },
  });
}

Circle.prototype.draw = function () {
  console.log(
    `Creat a circle object with a construstor function. Radius of ${this.radius}`
  );
};
// Prototype Members
Circle.prototype.move = function () {
  console.log('Move the circlr to this area ' + this.area);
};
const newCircle = new Circle(4);
newCircle.area = 11;
console.log(newCircle.keys);
// console.log(Circle.prototype);

// Object.key returns only Instance members
console.log(Object.keys(newCircle));

// for-in loop returns all instance and prototypical members.
for (let key in newCircle) {
  console.log(key);
}

*/

/*

// Prototypical inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log('duplicate');
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype.draw = function () {
  console.log('draw');
};

extend(Circle, Shape);
Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate();
  console.log('duplicate Circle');
};

const c = new Circle(30, 'Blue');

*/

// mixin()

function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canWalk = {
  walk: function () {
    console.log('walk');
  },
};
const canSwim = {
  swim: function () {
    console.log('Swim');
  },
};
const canEat = {
  eat: function () {
    console.log('Eat');
  },
};
function Person() {}

// const p1 = Object.assign({}, canEat, canWalk, canSwim);

mixin(Person.prototype, canEat, canWalk, canSwim);
const p = new Person();
console.log(p);
