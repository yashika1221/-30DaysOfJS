// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// « Task 1: Write a function to check if a number is even or odd and log the result to the console.

function evenOdd(num) {
    return num% 2== 0? "even": "odd";
}

let num= 7;
console.log("the number is", evenOdd(num));                 // Output: the number is odd     

// « Task 2: Write a function to calculate the square of a number and return the result.

function sqRoot(num) {
    return Math.sqrt(num);
}

num= 81;
console.log("the sq root of", num, "is", sqRoot(num));       // Output: the sq root of 81 is 9

// Activity 2: Function Expression

// * Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

function max(x, y) {
    return x> y? x: y;
}

let x= 8;
let y= -8;
console.log("the max of", x, "and", y, "is", max(x, y));      // Output: the max of 8 and -8 is 8

// « Task 4: Write a function expression to concatenate two strings and return the result.

function concat(s1, s2) {
    return s1+ s2;
}

let s1= "hello";
let s2= "world";
console.log(concat(s1, s2));                                // Output: hellow world

// Activity 3: Arrow Functions

// + Task 5: Write an arrow function to calculate the sum of two numbers and return the result.

const sum= (a, b) => a+ b;

console.log(sum(7, 3));                                     // Output: 10

// + Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const contains= (s, char) => s.includes(char);

let s= "hello world";
let char= "o";
console.log(s, "contains", char, contains(s, char));        // Output: hellow world contains o true

// Activity 4: Function Parameters and Default Values

// * Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const prod= (a, b= 1) => a* b;

let a= 3;
let b= 9;
console.log(prod(a, b));                                    // Output: 27

// + Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greetings= (_name, age= 18) => "Hii! "+ _name+ " your age is "+ age;

let _name= "Yashika";
let age= 20;
console.log(greetings(_name, age));                     // Output: Hii! Yashika your age is 20

// Activity 5: Higher-Order Functions.

// + Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

const repeat= (fun, times) => {
    for(let i=0; i< times; i++) {
        fun();
    }
};

const print= () => console.log("hello world");

repeat(repeat(print, 3));                               

// Output:
// hello world
// hello world
// hello world

// + Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.

const res= (fun1, fun2, n) => fun1(fun2(n)); 
const square= (n) => n* n;
const addTwo= (n) => n+ 2;

console.log(res(addTwo, square, 5));                    // Output: 27