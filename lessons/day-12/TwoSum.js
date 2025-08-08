/**
 * Input: [3, 7, 22, 1] target number: 8
 * Output: [index1, index2] | []
 */

const givenArray = [3, 7, 22, 1];
const targetNumber = 8;

let indexesWithBruteForce = findIndexesBruteForce(givenArray, targetNumber);
let indexesWithMap = findIndexesMap(givenArray, targetNumber);

console.log(indexesWithBruteForce);
console.log(indexesWithMap);

function findIndexesBruteForce(givenArray, targetNumber) {
    for (let firstIndex = 0; firstIndex < givenArray.length - 1; firstIndex++) {
        let lookingNumber = targetNumber - givenArray[firstIndex];
        for (let secondIndex = 0; secondIndex < givenArray.length; secondIndex++) {
            if (givenArray[secondIndex] === lookingNumber) {
                return [firstIndex, secondIndex];
            }
        }
    }
    return [];
}
//[3, 7, 22, 1]
function findIndexesMap(givenArray, targetNumber) {
    let numMap = new Map();
    for (let firstIndex = 0; firstIndex < givenArray.length; firstIndex++) {
        let currentValue = givenArray[firstIndex];
        let lookingNumber = targetNumber - currentValue;
        if (numMap.has(lookingNumber))
            return [numMap.get(lookingNumber), firstIndex];
        numMap.set(currentValue, firstIndex);
    }
    return [];
}


