/*
console.log(2 + 3);
console.log(10 + 5);

// VARIABLE IN JS

let name = "Abbas Jan";
console.log("Welcome");
console.log(name);

console.log("Bye");
console.log(name);

let marks = 345;
console.log(marks);
console.log(marks + 20);

console.log(500);
 console.log(500 + 20);


let age = 25;
let name = "Abu Bakar";
let promoted = false;
let color;

console.log(name);
console.log(age);
console.log(typeof age);
console.log(typeof name);
console.log(typeof promoted);
console.log(color);
console.log(typeof color);
console.log(typeof null);

age = "Twenty Three ";
console.log(typeof age);
console.log(typeof promoted);


let age = 30;
age = 31;
age = 32;
let progress;
progress = 50;

const dateOfBirth = "20 May 2000";
// dateOfBirth = "30 May";
// const status;
const PI = 3.14;

var name;

const color = "Green";
console.log(color);
*/

// Arithmetic Operators
const currentYear = 2022;

const nadeemAge = currentYear - 1980;
const admadAge = currentYear - 1999;
const aliAge = currentYear - 1989;

console.log(nadeemAge, admadAge);

const examResult = 50 + 20 + 80 + 90;
const examAverage = examResult / 4;
console.log(examResult, examAverage);

const twoTimeThree = 2 * 3;
console.log(twoTimeThree);

const twoToThePowerThree = 2 ** 3; //2 x 2 x 2
console.log(twoToThePowerThree);

const firstName = "Abu";
const lastName = "Bakar";

const fullName = firstName + " " + lastName;
console.log("Welcome " + fullName);

// Assignment Operators

let x = 30;
x = 30 + 2; //32
x = x - 15; //32 - 15 = 17
x -= 15;

x = x + 3; //17 + 3 = 20
x += 3;

x++; //x = x + 1;
x--; // x = x - 1;
console.log(x);

// Logical Operators
// ">" Greater Than
// "<" Less Than
// ">=" Greater or Equal
// "<=" Less or Equal
// "==" Equal
// "!=" Not Equal

// Nadeem Is older than Admad?
console.log(nadeemAge > admadAge);

console.log(12 != 13);
