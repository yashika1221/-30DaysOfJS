// Day 13: Modules

// Tasks/Activities:

// Activity 1: Creating and Exporting Modules

// « Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import {sum} from './sum.mjs';
console.log(sum(70, 8));                // Output: 78

// « Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import {vehicle} from './vehicles.mjs';
console.log(vehicle.info());

// Activity 2: Named and Default Exports

// « Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import {add5, add7} from './math.mjs';
console.log(add5(8));           // Output: 13
console.log(add7(3));           // Output: 10

// « Task 4: Create a module that exports a single function using default export. Import and use this function in another script.

import {difference} from '.difference.mjs';
console.log(difference(7, 0));              // Output: 7

// Activity 3: Importing Entire Modules

// « Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

import * as helpers from './helper.mjs';

console.log(helpers.add(17, 9));            // Output: 26
console.log(helpers.sub(6, 1));             // Output: 5

// Activity 4: Using Third-Party Modules

// « Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

import _ from 'lodash';

const numbersArray = [0, 6, 4, 9];
console.log(_.reverse(numbersArray));           // Output: [9, 6, 4, 0]

// « Task 7: Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        console.log(response.data);
    })
    .catch(err => {
        console.log('Error fetching data:', err);
    });

