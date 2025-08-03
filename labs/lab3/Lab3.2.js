/*
Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5
*/
let intArr = [-1, 1, 2, 3, 4, 5, -1, -5, 1, 0];

let minNumber = intArr[0];
let maxNumber = intArr[0];
for(let i = 1; i < intArr.length; i ++ ) {
    if(intArr[i] < minNumber) {
        minNumber = intArr[i];
    } 
    if(intArr[i] > maxNumber) {
        maxNumber = intArr[i];
    }
}
console.log(`Minimum: ${minNumber}`);
console.log(`Maximum: ${maxNumber}`);
