// Day 4: Loops

// Tasks/Activities:

// Activity 1: For Loop

// + Task 1: Write a program to print numbers from 1 to 10 using a for loop.

console.log("numbers 1-10:");
for(let i= 1; i<= 10; i++) {
    console.log(i);
}
// Output:
// numbers 1-10
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// « Task 2: Write a program to print the multiplication table of 5 using a for loop.

console.log("table of 5:");
for(let i= 1; i<= 10; i++) {
    console.log("5 x", i, "=", 5* i);
}

// Output:
// table of 5:
// 5 x 1 = 5
// 5 x 2 = 10
// 5 x 3 = 15
// 5 x 4 = 20
// 5 x 5 = 25
// 5 x 6 = 30
// 5 x 7 = 35
// 5 x 8 = 40
// 5 x 9 = 45
// 5 x 10 = 50

// Activity 2: While Loop

// + Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.

let j= 1;
let sum= 0;
while(j<= 10) {
    sum+= j;
    j++;
}
console.log("the sum of numbers from 1-10 is:", sum)            // Output: the sum of numbers from 1-10 is: 55

// + Task 4: Write a program to print numbers from 10 to 1 using a while loop.

console.log("numbers from 10-1");
j= 10;
while(j>0) {
    console.log(j);
    j--;
}

// Output:
// numbers from 10-1
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1

// Activity 3: Do...While Loop

// * Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.

console.log("numbers from 1-5: ");
j= 1;
do {
    console.log(j);
    j++;
} while(j<= 5);

// Output:
// numbers from 1-5:
// 1
// 2
// 3
// 4
// 5

// + Task 6: Write a program to calculate the factorial of a number using a do... while loop.

let num= 6;
let fact= 1;
j= 1;

do {
    fact*= j;
    j++;
} while (j<= 6);
console.log("the factorial of", num, "is:", fact);              // Output: the factorial of 6 is: 720

// Activity 4: Nested Loops.

// « Task 7: Write a program to print a pattern using nested for loops:

console.log("pattern: ");
for (let i= 1; i<= 5; i++) {
        console.log("* ".repeat(i));    
}

// Output:
// pattern:
// *
// * *
// * * *
// * * * *
// * * * * *

// Activity 5: Loop Control Statements.

// « Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.

console.log("numbers from 1-10 without 5:");
for(let i= 1; i<= 10; i++) {
    if(i== 5) continue;
    console.log(i);
}

// Output:
// numbers from 1-10 without 5:
// 1
// 2
// 3
// 4
// 6
// 7
// 8
// 9
// 10

// « Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.

console.log("break at 7");
for(let i= 1; i<= 10; i++) {
    if(i== 7) break;
    console.log(i);
}

// Output: 
// break at 7
// 1
// 2
// 3
// 4
// 5
// 6