/*
Merge 2 SORTED integer array into one SORTED array

```
Array 01: [1, 12, 16, 28, 34]
Array 02: [1, 13, 16, 27, 99]

Expected output: [1, 1, 12, 13, 16, 16, 27, 28, 34, 99]
```

*/
//Import as a module
const Lab3Utils = require("./Lab3Utils.js");

let a = [1, 12, 16, 28, 34];
let b = [1, 13, 16, 27, 99];
//let intArr = a.concat(b);
//Lab3Utils.sortInputArray(intArr);
//console.log(intArr);

let mergedArr = [];

function mergeSortedArray(a, b) {
    let i = 0; let j = 0;
    while (i < a.length && j < b.length) {
        if (a[i] <= b[j]) {
            mergedArr.push(a[i]);
            i++;
        } else {
            mergedArr.push(b[j]);
            j++;
        }
    }
    while (i < a.length) {
        mergedArr.push(a[i]);
        i++;
    }
    while (j < b.length) {
        mergedArr.push(b[j]);
        j++;
    }
    console.log(mergedArr);
}

mergeSortedArray(a, b);
