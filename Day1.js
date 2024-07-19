// Day 1: Variables and Data Types

// Tasks/Activities:

// Activity 1: Variable Declaration

// « Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var number= 35;
console.log(number);    // Output: 35

// « Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let name_= "Yashika";
console.log(name_);  // Output: Yashika

// Activity 2: Constant Declaration

// « Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const bool= true;
console.log(bool);  // Output: true 

// Activity 3: Data Types

// « Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type
// using the typeof operator.

let n= 14;
let str= "task";
let boolean= false;
let obj= {hello: "world", Java: "Script"};
let arr= [1,3,5,7];

console.log(typeof n);          // Output: number
console.log(typeof str);        // Output: string
console.log(typeof boolean);    // Output: boolean
console.log(typeof obj);        // Output: object
console.log(typeof arr);        // Output: object

// Activity 4: Reassigning Variables

// « Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let day= "monday";
console.log(day);             // Output: monday

day= "tuesday";
console.log(day);             // Output: tuesday

// Activity 5: Understanding const

// « Task 6: Try reassigning a variable declared with const and observe the error.

const month= "January";
console.log(month);            // Output: January

month= "February";
console.log(month);            //TypeError: Assignment to constant variable at Object.<anonymous>


// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and
// type of each variable to the console.

let integer= 55;
console.log(integer, typeof integer);               // Output: 55 number

let text= "hello world";
console.log(text, typeof text);                     // Output: hello world string

let status_= true;
console.log(status_, typeof status_);               // Output: true boolean

let evens=[2,4,6,8];
console.log(evens, typeof evens);                   // Output: [ 2, 4, 6, 8 ] object

let match= {day: "monday", month: "january", date: 14};
console.log(match, typeof match);                    // Output: { day: 'monday', month: 'january', date: 14 } object

// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it
// comes to reassignment.

let city= "Chandigarh";
console.log(city);                                  // Output: Chandigarh

city= "Delhi";
console.log(city);                                  // Output: Delhi

// the value of city updates when we use 'let'

const country= "India";
console.log(country);                               // Output: India

country= "Japan";
console.log(country);                               // TypeError: Assignment to constant variable. 

// unable to update the value of country when we use 'const'.
// Hence variables declared with const can not be redeclared.