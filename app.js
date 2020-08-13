//===== var, let, const======

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// // Init var
// var greeting;
// greeting = ('Hello');
// console.log(greeting);

// var can only include letter, numbers, _, $ 
// Can not start with numbers 


// Multi word vars

// var firstName = 'John';
// var first_Name = 'Sara';
// var FirstName = 'Tom';

//LET is similar to Var
// let name;
// name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// CONST cannot be changed

// const name = 'John';
// console.log(name);
// Can not reassign 
// name = 'Sara';
// Have to assign a value 
// const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Sara';
// person.age = 32;

// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);



//===== Data Types=====

// PRIMITIVE TYPES

// Strings
const name = 'John Doe';
// Number
const age = 45;
// Boolean
const HasKids = true;
// Null
const car = null;
// Undefined
let test;
// Symbol
const sym = Symbol();



// REFERENCE TYPES - Objects 

// Array
const hobbies = ['movies', 'music'];

// Object literal
const address = {
  town: 'Rotherham',
  region: 'South Yorkshire'
}

//Date
const today = new Date();
console.log(today);
console.log(typeof today);