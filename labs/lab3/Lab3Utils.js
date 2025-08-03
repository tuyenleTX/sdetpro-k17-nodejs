function sortInputArray(myArray) {
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

module.exports = {
    sortInputArray
}