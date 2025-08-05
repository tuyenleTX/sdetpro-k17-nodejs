// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// let index = 0;
// while (index < array.length) {
//     console.log(index);
//     index ++;
// }
const readline = require("readline-sync");
let isStillPlaying = true;

while (isStillPlaying) {
    printGameMenu();
    let userOption = getUserOption();
    if(userOption === 0) {
        isStillPlaying = false;
    } else if (userOption === 1) {
        let randomNumber = Math.floor(Math.random()*10) + 1;
        console.log(`Lucky number is : ${randomNumber}`);
    } else {
        console.log(`Nhap lui roi teo oi!`);
    }
}
console.log(`Hen gap lai`);

function printGameMenu() {
    console.log(
        /*
        LUCKY_NUMBER
        1: Guess a number (1 -> 10)
        0: Exit;
        */
    );
}

function getUserOption() {
    return Number(readline.question(`Please select an option: `));
}