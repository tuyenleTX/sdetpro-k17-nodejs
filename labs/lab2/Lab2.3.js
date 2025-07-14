const readline = require('readline-sync');
let height = readline.question('Please input height(m): ');
let weight = readline.question('Please input weight(kg): ');

let BMI = (weight / (height * height)).toFixed(1);
let tempBMI = 0;
let tempWeight = 0;
console.log('Your BMI is: ', BMI);
if (BMI < 18.5) {
    console.log('Underweight');
    tempBMI = 24.9 - BMI;
    tempWeight = (tempBMI * height * height).toFixed(1);
    console.log('Weight needs to gain is less than:', tempWeight, ' kg');
}
else if (BMI <= 24.9)
    console.log('Normal weight');
else if (BMI <= 29.9) {
    console.log('Overweight');
    tempBMI = BMI - 24.9;
    tempWeight = (tempBMI * height * height).toFixed(1);
    console.log('Weight needs to loose is less than:', tempWeight, ' kg');
}
else {
    console.log('Obesity');
    tempBMI = BMI - 24.9;
    tempWeight = (tempBMI * height * height).toFixed(1);
    console.log('Weight needs to loose is less than:', tempWeight, ' kg');
}


