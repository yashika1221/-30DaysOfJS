// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// « Task 1: Use template literals to create a string that includes variables for a perso name and age, and log the string to the console.

let name= "Yashika";
let age= 19;
let str= `Hey! I'm ${name} and my age is ${age}`;
console.log(str);

// Output: Hey! I'm Yashika and my age is 19

// « Task 2: Create a multi-line string using template (iterals and log it to the console.

str= `Hey!
I'm ${name},
My age is ${age}`;
console.log(str);

// Output:
// Hey!
// I'm Yashika,   
// My age is 19 

// Activity 2: Destructuring

// « Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let arr = [1,2,3,4,5];
let [first,second,third,...etc] = arr;
console.log(first);
console.log(second);

// Output: 
// 1
// 2

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the consol.

const book = {
    title: "H is for Hawk",
    author: "Helen Macdonald"
};
let {title,author} = book
console.log(title);
console.log(author);

// Output:
// H is for Hawk  
// Helen Macdonald

// Activity 3: Spread and Rest Operators

// « Task 5: Use the spread operator to create a new array that includes al elements of an existing array plus additional elements, and log the new array to the console.

let arr1=[1,2,3,4]
let arr2=[...arr1,5,6,7];
console.log(arr2);

// Output:
// [
//     1, 2, 3, 4,  
//     5, 6, 7      
//   ]

// « Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(... args) {
    let s= 0;
    for(let arg of args) {
        s+= arg;
    }
    return s;
}

arr= [9,8,0,1];
let ans= sum(... arr);
console.log(ans);

// Output: 18

// Activity 4: Default Parameters

// Task 7: Write 2 function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without
// the second parameter.

const prod= (a, b= 1)=> a* b; 

let a= 7;
let b= 5;
console.log(prod(a, b));
console.log(prod(a));

// Output:
// 35
// 7

// Activity 5: Enhanced Object Literals

// « Task 8: Use enhanced object literals to create an object with methods and properties, and log the abject to the console.

let person= {
    name: "Yashika",
    age: 19,
    
    msg() {
        console.log(`Hey!, my name is ${name} and my age is ${age}`);
    }
};

person.msg();

// Output: Hey!, my name is Yashika and my age is 19

// « Task 9: Create an object with computed property names based on variables and log the abject to the console.

let prop1= "name";
let prop2= "age";
let prop3= "year";

let person2= {
    [prop1]: "Yashika",
    [prop2]: 19,
    [prop3]: 2
};

console.log(person2);

// Output: { name: 'Yashika', age: 19, year: 2 }