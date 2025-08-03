/*
* HOF (Higher Order Function): parameter - definition of ANOTHER function or RETURN definition of function
*/

function greet(name) {
    console.log(`Hello ${name}`);
    
}

function dearGreeting(name) {
    console.log(`Hello, how are you ${name}`);
}

function ba3(callbackFn) {
    let name = "Teo";
    callbackFn(name);
}

ba3(greet);
ba3(dearGreeting);