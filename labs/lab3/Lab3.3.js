/*
Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
function sort(myArray) {
    let temp = 0;
    for (let i = 0; i < myArray.length - 1; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            if (myArray[j] < myArray[i]) {
                temp = myArray[j];
                myArray[j] = myArray[i];
                myArray[i] = temp;
            }
        }
    }
}
let intArr = [12, 34, 1, 16, 28, -1, 0, 33, 66, -1, -2, -9, -9];
sort(intArr);
console.log(intArr);