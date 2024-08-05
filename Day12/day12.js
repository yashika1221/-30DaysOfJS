// Day 12: Error Handling

// Tasks/Activities:

// Activity 1: Basic Error Handling with Try-Catch

// + Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError() {
    throw new Error("This is an intentionally thrown error!");
}
try {
    throwError();
}
catch(error) {
    console.log(error.message); 
}

// + Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

let divide=(num1,num2)=>{
    try{
        if(num2===0)
            throw new Error("Division by zero is not possible");
        else
            console.log(num1/num2);
    }
    catch(error){
        console.log(error.message);
    }
}

let num1=90;
let num2=0;
divide(num1,num2);

// Activity 2: Finally Block

// + Task 3; Write a script that includes a try-catch block and a finaly block. Log messages i the try, catch, and finally blocks to observe the execution flow.

let n1=30;
let n2=7;
try{
    console.log("Executing try block...");
    if(n2===0)
        throw new Error("Division by 0 is not possible");
    else
        console.log(n1/n2);
}

catch(error)
{
    console.log("Executing catch block statements...")
    console.log(error.message);
}

finally
{
    console.log("Executing finally block...");
    console.log("All errors have been handled.")
}

// Activity 3: Custom Error Objects

// + Task 4: Create a custom error clas that extends the built-in Error class. Throw an instance of this custom error in a function and handle t using a try-catch block.

class customError1 extends Error{
    ;
}
function errorHandling(m,n)
{
    try{
        if(m===0 && n===0)
            throw new customError1("Custom error");
        else
            console.log(num1**num2);
    }
    catch(error)
    {
        console.log(error.message);
        console.log("Processing error handling...");
        n=1;
        console.log("Ans is : ",m**n);
        console.log("Error handled");
    }
}
errorHandling(0,0);

// * Task 5: Write function that validates user input e.g,, checking if a tring is not empty) and throws a custom error if the validation fil. Handle the custom error using a try-catch block.

class customError2 extends Error{
    ;
}
function validateInput(str)
{
    try{
        if(str.length===0)
            throw new customError2("Invalid string");
        else
            console.log("Valid string");
    }
    catch(error){
        str+= "0";
        console.log("The validated string is :",str);
    }
        
}

// Activity 4: Error Handling in Promises

// + Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomFunction = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        let r = Math.floor(Math.random() * 10)
        if(r<5)
            resolve("executed successfully");
        else{
            reject(new Error("something went wrong"));
        }
    },2000);
    })
}
randomFunction().then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err.message);
});


// + Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

(async function (){
    try{
    let promise = await randomFunction();
    console.log(promise);
    }
    catch(err){
        console.log(err);
    }
})();

// Activity 5: Graceful Error Handling in Fetch

// + Task 8: Use the fetch API to request data from an invalid URL and handle the error using cath) . Log an appropriate error message to the console.


// + Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

const url = 'https://zoo-animals-api.p.rapidapi.com/animals/rand/10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '50920d862amsh183ad305193748dp1d2eb2jsnb6d30ebed125',
		'x-rapidapi-host': 'zoo-animals-api.p.rapidapi.com'
	}
};

(async function (){
try {
	const response = await fetch(url,options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
})()