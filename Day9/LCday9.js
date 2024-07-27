// Q1
// Problem 2667- Create Hello World function

var createHelloWorld = function() {
    
    return () => "Hello World";
};


// Q2
// Problem 2620- Counter

var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};