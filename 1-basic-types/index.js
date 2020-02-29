"use strict";
exports.__esModule = true;
/*
    TYPES IN TYPESCRIPT
*/
//boolean
var isDone = false;
console.log('THIS IS BOOLEAN: ');
console.log(isDone);
//number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log('\nTHIS IS NUMBERS: ');
console.log('decimal: ');
console.log(decimal);
console.log('hex: ');
console.log(hex);
console.log('binary: ');
console.log(binary);
console.log('octal: ');
console.log(octal);
//string
var color = "blue";
color = "red";
console.log('\nTHIS IS STRING: ');
console.log(color);
//template string (using back tick `) and also include line break
var fullname = 'Mohammad Iqbal';
var age = 27;
var sentence = "Hello, my name is " + fullname + ".\nI'll be " + (age + 1) + " years old this month";
console.log('\nTHIS IS TEMPLATE STRING: ');
console.log(sentence);
//array, there are two way to initiate
var list = [1, 2, 3];
console.log('\nTHIS IS ARRAY');
console.log('first way: ');
console.log(list);
var list2 = [1, 2, 3];
console.log('second way: ');
console.log(list2);
