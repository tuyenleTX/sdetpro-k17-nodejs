const readline = require('readline-sync');

let inputNumber = Number(readline.question('Please input a number:'));
if (Number.isNaN(inputNumber)) {
    console.log('it is not a number');
} else if (inputNumber === 0)
    console.log('0 is not considered even or odd');
else {
    if (inputNumber % 2 == 0)
        console.log('it\'s even');
    else console.log('it\'s odd');
}