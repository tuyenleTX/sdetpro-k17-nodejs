let array = [1, 2, 3, 4, 5];
const TARGET_NUMBER = 10;

let foundIndex = findIndex(array, TARGET_NUMBER);
if (foundIndex < 0)
    console.log(`${TARGET_NUMBER} not found`);
else
    console.log(`${TARGET_NUMBER} found at index ${foundIndex}`);

function findIndex(array, targetNumber) {
    for (let index = 0; index < array.length; index++) {
        const value = array[index];
        if (value === targetNumber) {
            return index;
        }
    }
    return -1;
}