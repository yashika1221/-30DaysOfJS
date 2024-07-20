// Day 2: Operators

// Tasks/Activities:

// Activity 1: Arithmetic Operations

// + Task 1: Write a program to add two numbers and log the result to the console.

let a= 5;
let b= 10;  
console.log("a + b = ", a+ b);          // Output: a + b = 15

// + Task 2: Write a program to subtract two numbers and log the result to the console.

a= 20;
b= 2;
console.log("a - b = ", a- b);           // Output: a - b = 18

// + Task 3: Write a program to multiply two numbers and log the result to the console.

a= 8;
b= 2;
console.log("a x b = ", a* b);            // Output: a x b = 16

// « Task 4: Write a program to divide two numbers and log the result to the console.

a= 10;
b= 5;
console.log("a / b = ", a/ b);          // Output: a / b = 4

// + Task 5: Write a program to find the remainder when one number i divided by another and log the result to the console.

a= 5;
b= 2;
console.log("remainder = ", a% b);      // Output: remainder = 1

// Activity 2: Assignment Operators

// + Task 6: Use the += operator to add a number to a variable and log the result to the console.

a= 24;
b= 2;
b+= a;          // b= b+ a
console.log("b+= a is ", b);            // Output: b+= a is 26

// « Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

a= 10;
b= 20;
b-= a
console.log("b-= a is ", b);            // Output: b-= a is 10

// Activity 3: Comparison Operators

// « Task 8: Write a program to compare two numbers using > and < and log the result to the console.

a= 3;
b= 7;

console.log(a, " is greater than ", b , a> b);      // Output: 3 is greater than or equal to 7 false
console.log(a, " is lesser than ", b, a< b);        // Output: 3 is lesser than or equal to 7 true

// + Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

a= 3;
b= 3;

console.log(a, " is greater than or equal to ", b, a>= b);      // Output: 3 is greater than or equal to 3 true
console.log(a, " is lesser than or equal to ", b, a<= b);       // Output: 3 is lesser than or equal to 3 true

// + Task 10: Write a program to compare two numbers using == and === and log the result to the console.

a=19;
b= "19";

console.log(a, " = ", b, a== b);        // == for equals to             // Output: 19 = 19 true
console.log(a, " = ", b, a=== b );      // === to strictly equals to    // Output: 19 = 19 false

// Activity 4: Logical Operators.

// « Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.

a= 1;
b= 2;
c= 3;

console.log(a, " < ", b, " and ", b, " < ", c, ((a< b) && (b< c)));     // Output: 1 < 2 and 2 < 3 true    

// « Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.

console.log(a, " < ", b, " or ", b, " > ", c, ((a< b) || (b< c)));      // Output: 1 < 2 or 3 > 2 true

// + Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.

console.log(a, "is not equals to zero", a!= 0);                         // Output: 1 is not equals to 0 true

// Activity 5: Ternary Operator

// « Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

a= 10;
b= -10;

console.log("nature of a is ", a> 0 ? "positive" : "negative");         // Output: nature of a is positive
console.log("nature of b is ", b> 0 ? "positive" : "negative");         // Output: nature of b is negative

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.

let x= 45;
let y= 5;

console.log("addition: x + y =", x+ y);                                 // Output: addition: x + y = 50

console.log("subtraction: x - y =", x- y);                              // Output: subtraction: x - y = 40

console.log("multiplication: x * y =", x* y);                           // Output: multiplication: x * y = 225

console.log("division: x / y =", x/ y);                                 // Output: division: x / y = 9

console.log("remainder: x % y =", x% y);                                // Output: remainder: x % y = 0

console.log("increment: x++ =", x++);                                   // Output: increment: x++ = 46

console.log("decrement: y-- =", y--);                                   // Output: decrement: y-- = 4

console.log("exponentiation: x ** y =", x** y);                         // Output: exponentiation: x ** y = 4477456

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the
// results.

x= 5;
y= 6;
z= 7;

let x_greaterthan_y= x> y;
let x_greaterthan_z= x> z;

console.log(x, "is greater than", y, x_greaterthan_y );                             // Output: 5 is greater than 6 false
console.log(x, "is greater than", z, x_greaterthan_z );                             // Output: 5 is greater than 7 false

console.log(x, "is the max of", x, y, z, x_greaterthan_y && x_greaterthan_z);       // Output: 5 is the max of 5 6 7 false
console.log(x, "is not the min of", x, y, z, x_greaterthan_y || x_greaterthan_z);   // Output: 5 is not the min of 5 6 7 false

console.log(x, "is equals to ", y, x== y);                                          // Output: 5 is equals to 6 false
console.log(x, "is strictly equals to", y, x=== y);                                 // Output: 5 is strictly equals to 6 false

console.log(x, "is not equals to", y, x!= y);                                       // Output: 5 is not equals to 6 true


// 3. Ternary Operator Script: Write a script that uses the termary operator to determine if a number is positive or negative and logs the result.

a= 8;

console.log("the nature of", a, "is: ", a>= 0? "positive" : "negative")             // Output: the nature of 8 is positive