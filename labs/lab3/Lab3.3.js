/*
Sort an integer array from min to max

Input: [12, 34, 1, 16, 28]
Expected output: [1, 12, 16, 28, 34]
*/
//Import as a module
const Lab3Utils = require("./Lab3Utils.js");

let intArr = [12, 34, 1, 16, 28, -1, 0, 33, 66, -1, -2, -9, -9];
Lab3Utils.sortInputArray(intArr);
console.log(intArr);