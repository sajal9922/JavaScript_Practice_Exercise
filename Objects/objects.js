
/*
// Object-oriented programming (OOP).

// object literal.

const circle = {
  radius: 1,
  location:{
    x: 1,
    y: 2
  },
  isVisible: true,
  draw: function(){
    console.log('Draw.');
  }
};

circle.draw();


// Factory Functions.....

// camel notation for naming function.

function creatCircle(radius){
  return{
    radius,
    draw(){
      console.log('draw circle.');
    }

  };
}

const circle1 = creatCircle(1);
console.log(circle1);

const circle2 = creatCircle(3);
console.log(circle2);


// Constructor function...

// Use Pascal Notation for naming the function..

function Circle(radius){
  this.radius = radius,
  this.draw = function() {
    console.log('circle object. constructor function.');
  }
}

const circle3 = new Circle(4);
console.log(circle3); 
console.log(circle3.radius); 
*/

/*
// Dynamic nature of an Object...

const circle = {
  radius: 1
};
console.log(circle);

// add properties to an object...
circle.color = 'red';
circle.draw = function(){}
console.log(circle);

// Removing properties from an object..

delete circle.color;
console.log(circle);
*/

/*
// Enumerating properties of on object..

const circle = {
  radius: 1,
  draw: function (){
    console.log ('draw');
  }
};
console.log(circle);

for(let key in circle)
  console.log(key, circle[key]);

// For-of loop usesed for arrays or maps..
//for objects we can use keys or entries method they returns 
//object property or value as an array of strings.

//keys method..
for(let key of Object.keys(circle))
console.log(key);

//entries method..
for(let entry of Object.entries(circle))
console.log(entry);

// in operator is used to check, is there a property in an object.

if('radius' in circle) console.log('yes');

*/

/*
// Cloning an object...

const circle = {
  radius: 1,
  draw: function (){
    console.log ('draw');
  }
};
console.log('circle object');
console.log(circle);

// const another = {};
// for(let key in circle)
//   another[key] = circle[key];


// assign operator add one or multiple object property in to another object
// const another = Object.assign({},circle);

// '...' spread operater add an object property in to another oblect.

const another = {...circle};

console.log('another, clone of circle object');
console.log(another);
*/

/*
// Template string....

const name = 'Sajal';
const message = 
`Hi ${name},

Thank you for joing to our group.

Regards,
K`;
*/

// Date built-in object..

const now = new Date();
console.log(now);
const date1 = new Date('August 01 2023, 13:16');
console.log(date1);
now.getDate();
