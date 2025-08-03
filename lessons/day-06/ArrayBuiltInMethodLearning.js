let myArray = [1,2,3,4,5];

let result = myArray.filter(isEvenNumber);
console.log(result);

function isEvenNumber(number, index, array) {
    console.log(`Validating value ${number} at ${index} and the array is now ${array}`);
    return number%2 === 0;
}

function isOddNumber(number, index, array) {
    return !isEvenNumber(number, index, array);
}

//DELETE | Splice
let startIndex = 2;
let deleteCount = 1;
let insertValue = 10;
//let returnedArray = myArray.splice(startIndex, deleteCount, insertValue);
//console.log(returnedArray);
//console.log(myArray);//my array is changed after splice. if not want to change, use [...array]

let clonedArray = [...myArray];
clonedArray.splice(startIndex, deleteCount, insertValue);
console.log(clonedArray);
console.log(myArray);