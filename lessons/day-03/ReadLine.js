const readline = require("readline-sync");

let arrivalTime = readline.question("Input arrival time: ");
let isHeOnTime = (Number(arrivalTime)===7);

if (isHeOnTime) {
    console.log(`Let's talk`);
} else {
    console.log(`Write a letter`);
}

let msg = isHeOnTime ? 'Let\'s talk' : 'Write a letter';
console.log(msg);