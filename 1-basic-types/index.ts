export {};
/*
    TYPES IN TYPESCRIPT
*/

//boolean
let isDone: boolean = false;

console.log('THIS IS BOOLEAN: ');
console.log(isDone);

//number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

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
let color: string = "blue";
color = "red";
console.log('\nTHIS IS STRING: ');
console.log(color);

//template string (using back tick `) and also include line break
let fullname: string = 'Mohammad Iqbal';
let age: number = 27;
let sentence: string = `Hello, my name is ${fullname}.
I'll be ${age+1} years old this month`;
console.log('\nTHIS IS TEMPLATE STRING: ');
console.log(sentence);

//array, there are two way to initiate
let list: number[] = [1,2,3];
console.log('\nTHIS IS ARRAY: ');
console.log('first way: ');
console.log(list);
let list2: Array<number> = [1,2,3];
console.log('second way: ');
console.log(list2);

//tuple
//tuple is array with fixed number of element with known types but need not be the same
let tuple: [string, number, string, boolean];
tuple = ["hello",1,'1123',false];
console.log('\n THIS IS TUPLE: ');
console.log(tuple);
console.log(`tuple third element: ${tuple[2]}`);

//enum
//is a way of defining constant
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
console.log('\n THIS IS ENUM: ')
console.log(Color);
console.log('using enum, getting green color value:');
console.log(c);

//any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
console.log('\n THIS IS ANY: ');
console.log(notSure);
let anyList: any[] = [1,true,'free'];
console.log('for array: ');
console.log(list);


//void
//for function to not return anything
function warnUser(): void{
    console.log("this is a warning message");
}
console.log('\n THIS IS VOID: ');
warnUser();





