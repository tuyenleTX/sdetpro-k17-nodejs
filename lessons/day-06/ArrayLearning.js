let myArray = [1, 2, 3, 4, 5];

console.log(`Array length: ${myArray.length}`);

console.log(`Last element's value ${myArray[myArray.length - 1]}`);

myArray[10] = 1000; 

for(let i = 0; i < myArray.length; i ++) {
    console.log(`Value at index ${i} is: ${myArray[i]}`);
}

myArray.push(6,7,8,9,10);
for(let i = 0; i < myArray.length; i ++) {
    console.log(`Value at index ${i} is: ${myArray[i]}`);
}

const value = myArray.pop();
console.log(`last value: ${value}`);