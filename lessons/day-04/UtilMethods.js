const readline = require("readline-sync");
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

module.exports = {
    getInputFromKeyboard: getUserInputNum,
    getUserInputNumExpression
}