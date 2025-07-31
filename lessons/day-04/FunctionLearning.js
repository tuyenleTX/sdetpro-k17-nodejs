//DRY stands for Don't repeat yourself
//Single Responsibility (Tinh Don Nhiem)
//Clean Code

const readline = require("readline-sync");


let inputNUmber = getUserInputNum(); //hoisting
//let inputNUmber = getUserInputNumExpression();//no hoisting - cannot access before clarification
console.log(`User input number:  ${inputNUmber}`);

let result = addNumber(1, 2);
console.log(`Add result: ${result}`);

//Method 01: Function Declaration - Hoisting
function getUserInputNum() {
    let inputNumber = readline.question('Please input a number: ');
    return Number(inputNumber);
}

//Method 02: Function Expression - No Hoisting
const getUserInputNumExpression = function () {
    let inputNumber = readline.question('Please input a number: ');
    return Number(inputNumber);
} 

function addNumber(a, b) {
    if (a && b) {
        return a + b;
    } else {
        throw new Error(`Number 1 and Number 2 must be numbers`);
    }
}

