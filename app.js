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


// // Strings, Methods and Concatenations

// const firstName = 'Zahir';
// const LastName = 'Rafiq';
// const age = 47;
// const str = 'Hello there my name is Zed';
// const tags = 'web design, web development,programming';

// let val;
// val = firstName + LastName;

// // Concatenations

// val = firstName + ' ' + LastName;

// // // append
// // val = 'Zahir ';
// // val += 'Rafiq ';

// val = 'Hello my name is ' + firstName + ' and I\'am ' + age;

// // Escaping 
// val = 'That\'s awesome, I can\'t wait';


// // Length Property Note Property does not need brackets.
// val = firstName.length;

// // concat()
// val = firstName.concat(' ', LastName);

// // change case 
// val = firstName.toLocaleLowerCase();
// val = firstName.toUpperCase();


// // indexOf
// val = firstName.indexOf('a');
// val = firstName.lastIndexOf('h');

// // charAt
// val = firstName.charAt('4');
// // get last char
// val = firstName.charAt(firstName.length - 1);

// // substrings()
// val = firstName.substring(0, 2);

// //slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // spit()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Zed', 'Isaac');

// // includes()
// val = str.includes('Hello');

// console.log(val);

// Template Literals 

// const name = 'Zahir';
// const age = 47;
// const job = 'Web Developer';
// const town = 'Rotherham';
// const heading = 'About me';
// let html;

// // without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>Town: ' + town + '</li></ul>';

// function hello() {
//   return 'hello';
// }
// // Template Strings/literals
// html = `
//   <h1>${heading}</h1>
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>Town: ${town}</li>
//     <li>${2+2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
//   </ul>
// `;


// document.body.innerHTML = html;

// Arrays amd Arrays Methods

// Create some Arrays

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22, 45, 33, 76, 54);
// const fruit = ['Apple', 'Orange', 'Banana', 'Pear'];
// const mix = [22, 'Hello', true, undefined, null, {
//   a: 1,
//   b: 1
// }, new Date()];


// let val;

// // Get Array length
// val = numbers.length;
// // check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // insert into a Array
// numbers[2] = 100;
// // find index of value
// val = numbers.indexOf(36);

// MUTATING ARRAYS

// // add on end
// numbers.push(250);
// // add on front
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// //take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 3);
// // Reverse
// numbers.reverse();

// // Concatenate arrays
// val = numbers.concat(numbers2);
// // Sorting arrays
// val = fruit.sort();
// val = numbers.sort();

// // Use the "Compare function"
// val = numbers.sort(function (x, y) {
//   return x - y;
// });

// // Reverse sort numbers
// val = numbers.sort(function (x, y) {
//   return y - x;
// });

// Find
// function Over50(num) {
//   return num > 50;
// }

// val = numbers.find(Over50);


// console.log(numbers);
// console.log(val);


// ==== Object Literals ====//

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 36,
//   email: 'steve@aol.com',
//   hobbies: ['Music', 'sport', ],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function () {
//     return 2020 - this.age;
//   }
// }

// let val;

// val = person;

// // get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [{
//     name: 'John',
//     age: 30
//   },
//   {
//     name: 'Mike',
//     age: 23
//   }, {
//     name: 'Nancy',
//     age: 40
//   }

// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// ==== Date and Times ==== //

// let val;

// const today = new Date();
// let birthday = new Date('8-14-1973 9:25:00');
// birthday = new Date('August 14 1973');
// birthday = new Date('8/14/1973');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);


// ==== If Statements & Comparison Operators ==== //

// if (something) {
//   do something
// } else {
//   do something
//   else
// };

// const id = 100;

// // EQUAL TO
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // // NOT EQUAL TO
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // // EQUAL TO VALUE & TYPE
// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // // NOT EQUAL TO VALUE & TYPE
// if (id !== 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // Test if undefined
// if (typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// // GREATER OR LESS THAN

// if (id > 200) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT');
// }

// // IF ELSE

// const color = 'yellow';

// if (color === 'red') {
//   console.log('Color is Red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// // LOGICAL OPERATORS
// const name = 'Steve';
// const age = 70;

// // AND &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult `);
// }

// // OR ||

// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in the race`);
// } else {
//   console.log(`${name} is register for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if (id === 100)
//   console.log('CORRECT');
// else
//   console.log('INCORRECT');

// ======Switches=======//
const color = 'yellow';

switch (color) {
  case 'red':
    console.log('Color is red');
    break;
  case 'blue':
    console.log('Color is blue');
    break;
  default:
    console.log('Color is not red or blue');
    break;
}

let day;

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
    break;

}

console.log(`Today is ${day}`);