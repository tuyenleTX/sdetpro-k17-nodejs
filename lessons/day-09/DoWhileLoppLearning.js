//Sent request to a server and just stop when response is 5xx
const readline = require("readline-sync");
let randomNumber = generateRandomNumber();
console.log(`Random number is: ${randomNumber}`);
let guessingTime = 0;
do {
    let userNumber = getUserNumber();
    if(userNumber === randomNumber) {
        console.log(`Hooray!`);
        break;
    }
    guessingTime ++;
} while (guessingTime <3)

if (guessingTime === 3) {
    console.log(`Thoi dung buon teo oi!`);
} else {
    console.log(`Hen gap lai`);
}

function getUserNumber() {
    return Number(readline.question(`Please enter your number: `));
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 10 + 1);
}