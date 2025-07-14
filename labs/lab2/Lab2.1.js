const readline = require('readline-sync');
let height = readline.question('Please input height(m): ');
let weight = readline.question('Please input weight(kg): ');

let BMI = (weight / (height * height)).toFixed(1);
console.log('Your BMI is: ', BMI);
if (BMI < 18.5)
    console.log('Underweight');
else if (BMI <= 24.9)
    console.log('Normal weight');
else if (BMI <= 29.9)
    console.log('Overweight');
else
    console.log('Obesity');