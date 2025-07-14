const readline = require('readline-sync');

let inputNumber = readline.question('Please input a number:');
if (inputNumber % 2 == 0)
    console.log('it\'s even');
else console.log('it\'s odd');