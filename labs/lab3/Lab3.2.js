/*
Finding maximum value/minimum value from an integer array

let intArr = [1, 2, 3, 4, 5];

Minimum: 1
Maximum: 5
*/
//let intArr = [-1, 1, 2, 3, 4, 5, -1, -5, 1, 0];
let intArr = [1, 1, 2, 3, 4, 5, 1, 5, 1];
//let intArr = [1, 1,1];
let minNumber = intArr[0];
let maxNumber = intArr[0];

let minIndexes = [0];
let maxIndexes = [0];
for (let i = 1; i < intArr.length; i++) {
    if (intArr[i] < minNumber) {
        minNumber = intArr[i];
        minIndexes = [];
        minIndexes.push(i);
    } else if (intArr[i] === minNumber) { minIndexes.push(i); }
    if (intArr[i] > maxNumber) {
        maxNumber = intArr[i];
        maxIndexes = [];
        maxIndexes.push(i);
    } else if (intArr[i] === maxNumber) {
        maxIndexes.push(i);
    }
}

if(minNumber === maxNumber) {
    console.log(`All arrays have same number: ${minNumber}, there is no min or max`);
} else {
    console.log(`Minimum: ${minNumber} at indexes: ${minIndexes}`);
    console.log(`Maximum: ${maxNumber} at indexes: ${maxIndexes}`);
}

