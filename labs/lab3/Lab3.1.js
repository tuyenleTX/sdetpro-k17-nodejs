/*
Count how many odd, even number(s) in an integer array

let intArr = [1, 2, 3, 4, 5];

Even numders: 2
Odd numbers: 3
*/

let intArr = [1, 2, 3, 4, 5];
let noEven = 0;
let noOdd = 0;
function countEvenAndOdd(myArray) {
    for(let i = 0; i < myArray.length; i ++) {
        if(isEvenNumber(myArray[i])) noEven ++;
        else noOdd ++;
    }
    console.log(`Even numbers: ${noEven}`);
    console.log(`Odd numbers: ${noOdd}`);
}

function isEvenNumber(number) {
    return number%2 === 0;
}

function isOddNumber(number) {
    return !isEvenNumber(number);
}

countEvenAndOdd(intArr);