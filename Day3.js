// Day 3: Control Structures

// Tasks/Activities:

// Activity 1: IfElse Statements

// « Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let num= -15;

if(num> 0) {
    console.log(num, "is positive");
}
else if(num< 0) {
    console.log(num, "is negative");                // Output: -15 is negative
}
else {
    console.log(num, "is zero");
}

// « Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let age= 22;

if(age< 18) {
    console.log("the person is not an adult");
}
else {
    console.log("the person is an adult");              // Output: the person is an adult
}

// Activity 2: Nested If-Else Statements

// + Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let a= 8;
let b= 9;
let c= 0;

if(a> b) {
    if(a> c) {
        console.log(a, "is te max");
    }
    else {
        console.log(c, "is the max");
    }
}
else {
    if(b> c) {
        console.log(b, "is the max");               // Output: 9 is the max
    }
    else {
        console.log(c, "is the max");
    }
}

// Activity 3: Switch Case

// + Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the consol.

let day= 5;

switch(day) {
    case 1:
        console.log("the day is Monday");
        break;
    case 2:
        console.log("the day is Tuesday");
        break;
    case 3:
        console.log("the day is Wednesday");
        break;
    case 4:
        console.log("the day is Thursday");
        break;
    case 5:
        console.log("the day is Friday");               // Output: the day is Friday
        break;
    case 6:
        console.log("the day is Saturday");
        break;
    case 7:
        console.log("the day is Sunday");
        break;
    Default:
        console.log("enter a valid week number");
}

// « Task 5: Write a program that uses a switch case to assign a grade (A, B, C, D, F) based on a score and log the grade to the console.

let marks= 55;

switch (true) {
    case marks> 90 && marks<= 100:
        console.log(" the grade is A");
        break;
    case marks> 80:
        console.log(" the grade is B");
        break;
    case marks> 70:
        console.log(" the grade is C"); 
        break;
    case marks> 60:
        console.log("the grade is D");
        break;
    case marks <= 60:
        console.log("the grade is F");              // Output: the grade is F
        break;
    Default:
        console.log("enter valid marks");           
}

// Activity 4; Conditional (Ternary) Operator

// + Task 6: Write a program that uses the temary operator to check if a number is even or odd and log the result to the console.

let n= 7;

console.log( n%2== 0 ? "even" : "odd");             // Output: odd

// Activity 5: Combining Conditions

// + Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year=2024;

if( (year % 4== 0) ||( (year% 100 == 0) && (year% 400== 0))){
    console.log(year, "is a leap year");                        // Output: 2024 is a leap year
}
else {
    console.log(year, "is not a leap year");
}
