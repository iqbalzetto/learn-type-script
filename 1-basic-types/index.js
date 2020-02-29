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
console.log('\nTHIS IS ARRAY: ');
console.log('first way: ');
console.log(list);
var list2 = [1, 2, 3];
console.log('second way: ');
console.log(list2);
//tuple
//tuple is array with fixed number of element with known types but need not be the same
var tuple;
tuple = ["hello", 1, '1123', false];
console.log('\n THIS IS TUPLE: ');
console.log(tuple);
console.log("tuple third element: " + tuple[2]);
//enum
//is a way of defining constant
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log('\n THIS IS ENUM: ');
console.log(Color);
console.log('using enum, getting green color value:');
console.log(c);
