
/*
// 01- Show address..

// Create object name adderss that has properties 
// street
// city
// zipcode

// Creat a function that show the address.

const address = {
  street: 'Valtasentie 38',
  city: 'Mynämäki',
  zipCode: 23100
};

showAddress(address);

function showAddress(address){
  for(let key in address)
  console.log(key,address[key]);
}
*/

/*

//02- Factory and Constructor function

// Creat an Object with Factory cunction.

//Factory fuunction..

function creatAddress(street,city,zipCode){
  return{
    street,
    city,
    zipCode
  };
}

const newAddress = creatAddress('a','b','c');
console.log (newAddress);



// Constractor function..
// Naming convension PascalNotation

function Adderss(street,city,zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

const newAddress2 = new Adderss('d','e','f');
console.log (newAddress2);

*/

/*
// 03-Object Equality

function Adderss(street,city,zipCode){
  this.street = street,
  this.city = city,
  this.zipCode = zipCode
}

const address1 = new Adderss('d','e','f');
const address2 = new Adderss('d','e','f');
const address3 = address1;

console.log(areEqual(address1, address2));

console.log(areSame(address1, address2));
console.log(areSame(address1, address3));

function areEqual(address1, address2){
  return address1.street === address2.street &&
    address1.city === address2.city &&
    address1.zipCode === address2.zipCode;

  }

function areSame(address1, address2){
  return address1 === address2;
}
*/

/*
// 04- Blog post exercise

const blogPost ={
  title: 'fghfhg hgdfhdf',
  body: 'dsjhfjhdf jhdsfhfjh dhfkjhdfh k',
  author: 'dfkjdhfkdjhf',
  views: 300,
  comments: [
    {author: 'jjdjjd',body:'kwibfjd'},
    {author: 'jjdjjd',body:'kwibfjd'}
  ],
  isLive: true
};

console.log(blogPost);
for(let key in blogPost)
  console.log(key, blogPost[key]);

*/

/*

//05-Constructor function..


function Post(title, body, author){
  this.title = title;
  this.body = body;
  this.author = author;
  this.view = 0;
  this.comment = [];
  this.isLive = false;
}

const post = new Post('a', 'b', 'c');
console.log(post);
*/
/*
// 06-Price-range Oblect...

let priceRange =[
  {label: '€', tooltip: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10},
  {label: '€€', tooltip: 'Moderate', minPerPerson: 0, maxPerPerson: 10},
  {label: '€€€', tooltip: 'Expensive', minPerPerson: 0, maxPerPerson: 10}
];
*/