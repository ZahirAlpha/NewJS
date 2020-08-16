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
// const name = 'John Doe';
// Number
// const age = 45;
// Boolean
// const HasKids = true;
// Null
// const car = null;
// Undefined
// let test;
// Symbol
// const sym = Symbol();



// REFERENCE TYPES - Objects 

// Array
// const hobbies = ['movies', 'music'];

// Object literal
// const address = {
//   town: 'Rotherham',
//   region: 'South Yorkshire'
// }

//Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);


// ===== Type Converions=====//

// let val;

// // number to string 
// val = String(555);
// val = String(4 + 4);

// // Bool to string
// val = String(true);

// // Date to string 
// val = String(new Date());

// // array to string 
// val = String([1, 2, 3, 4]);

// toString()
// val = (5).toString();
// val = (true).toString();

// you can use both methods 

// strings to Numbers 
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1, 2, 3]);

// val = parseInt('100');
// val = parseFloat('100.30');

// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = String(5);
// const val2 = 6;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

// The Math Objects 

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple maths with numbers

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.4);
// val = Math.sqrt(2.4);
// val = Math.abs(2.4);
// val = Math.pow(2.4);
// val = Math.min(2, 33, 4, 1, 55, 6, 3, -2);
// val = Math.max(2, 33, 4, 1, 55, 6, 3, -2);

// val = Math.random();

// // this chooses a random number between 1 - 20
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);