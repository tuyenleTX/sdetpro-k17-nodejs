const readline = require("readline-sync");

let userInput = getUserInput();
if (userInput === 2) {

}

switch (userInput) {
    case 2: console.log(`Mon`); break;
    case 3: console.log(`Tues`); break;
    case 4: console.log(`Wed`); break;
    case 5: console.log(`Thurs`); break;
    case 6: console.log(`Fri`); break;
    case 7: console.log(`Sat`); break;
    case 8: console.log(`Sun`); break;
    default: console.log(`Undefined`);
}
function getUserInput() {
    return Number(readline.question(`Please enter your number: `));
}

