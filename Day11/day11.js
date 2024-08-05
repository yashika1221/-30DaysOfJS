// Day 11: Promises and Async/Await

// Tasks/Activities:

// Activity 1: Understanding Promises

// + Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("message");
    },2000);
    
});
promise1.then((res)=>{
    console.log(res);
});

// + Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch() .

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("error");
    },2000);
});

promise2.catch((err)=>{
    console.log(err);
});

// Activity 2: Chaining Promises.

// « Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const fetch = (data)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(data);
            resolve("data fetched");
        },2000); 
    });
    
};

console.log("fetching data1...");
fetchData(1).then(()=>{
    console.log("fetching data2...");
    fetchData(2).then(()=>{
        console.log("fetching data3...");
        fetchData(3).then((msg)=>{
            console.log(msg);
        });
    });
});

// Activity 3: Using Async/Await

// « Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const resolveFun = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successfully executed");
        },2000);
    });
}
(async function (){
    const prm = await resolveFun();
    console.log(prm);
})();

// « Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

const rejectFun = ()=>{
    return new Promise((resolve,reject)=>{
        reject("error");
    })
}
(async function() {
    try {
        await fun2();
    } 
    catch (err) {
        console.log(err);
    }
})();

// Activity 4: Fetching Data from an API

// « Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.


// « Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

(async function(){
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.log("error generated");
    }
    })()

// Activity 5: Concurrent Promises

// « Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

function asyncFunc(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("successful");
        },4000);
    });
};

const x=fun1();
const y=asyncFunc();
Promise.all([x,y]).then((values)=>{
    console.log(values);
});

// « Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises. -->

Promise.race([x,y]).then((values)=>{
    console.log(values);
});