// Tasks/Activities:

// Activity 1: Array Creation and Access

// « Task 1: Create an array of numbers from 1 to 5 and log the array to the console.

const arr= [1,2,3,4,5];

console.log(arr);                                               // Output: [ 1, 2, 3, 4, 5 ]

// Task 2: Access the frst and ast elements of the array and log them to the consol.

let first= arr[0];
let last= arr[arr.length- 1];

console.log("first: ", first, " last: ", last);                 // Output: first:  1  last:  5

// Activity 2: Aray Methods (Basic)

// + Task 3: Use the push method to add a new number to the end of the array and log the updated array. :

arr.push(6);
console.log(arr);                                               // Output: [ 1, 2, 3, 4, 5, 6 ]

// « Task 4: Use the pop method to remove the last element from the array and log the updated array.

arr.pop();
console.log(arr);                                               // Output: [ 2, 3, 4, 5 ]

// + Task 5: Use the Shift method to remove the first element from the array and log the updated array.

arr.shift();
console.log(arr);                                               // Output: 

// Task 6: Use the unshif method to add a new number to the beginning of the array and log the updated array.

arr.unshift(1);
console.log(arr);                                               // Output: [ 1, 2, 3, 4, 5 ]

// Activity 3: Array Methods (Intermediate)

// « Task 7: Use the map method to create a new array where each number is doubled and log the new array.

const arr2= [3,7,0,4];
const doubleArr= arr2.map(num => num* 2);                       // Output: [ 6, 14, 0, 8 ]
console.log(doubleArr);

// « Task 8: Use the f1lter method to create a new array with only even numbers and log the new array.

const evenNum= arr2.filter(num => num% 2=== 0);
console.log(evenNum);                                           // Output: [ 0, 4 ]

// « Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.

const sum= (num1, num2) => num1+ num2;
console.log(arr2.reduce(sum));                                  // Output: 14

// Activity 4: Array Iteration

// « Task 10: Use a for Loop to iterate over the array and log each element to the console.

const arr3= [9,4,0,7];
for(let i= 0; i< arr3.length; i++) {
    console.log(arr3[i]);
}
// Output: 
// 9
// 4
// 0
// 7

// « Task 11: Use the forEach method to iterate over the array and log each element to the console.

const print= (num) => console.log(num);
arr3.forEach(print);
// Output: 
// 9
// 4
// 0
// 7

// Activity 5: Multi-dimensional Arrays.

// « Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.

const matrix= [[1,2,3], [2,3,1], [5,0,9]];
console.log(matrix);                                    // Output: [ [ 1, 2, 3 ], [ 2, 3, 1 ], [ 5, 0, 9 ] ]

// « Task 13: Access and log a specific element from the two-dimensional array.

let ele= matrix[1][2];
console.log(ele);                                       // Output: 1