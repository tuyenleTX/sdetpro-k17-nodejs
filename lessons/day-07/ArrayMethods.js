let array = [1, 2, 3, 4, 5];

//MAP - anh xa
let doubleValueArray = array.map(doubleValue);
function doubleValue(value, index, array) {
    return value * 2;
}

console.log(`Original array: ${array}`);
console.log(`Double array: ${doubleValueArray}`);

//SORT - String
let strings = ['B', 'C', 'A'];
console.log(strings.sort());
console.log(strings.reverse());

//SORT - Number
let numbers = [100, 19, 22];
numbers.sort();
console.log(`Default sort: ${numbers}`); //100, 19. 22
numbers.sort(sortNumberASC);
console.log(`Sorted ASC: ${numbers}`); //19,22,100
numbers.sort(sortNumberDESC);
console.log(`Sorted DESC ${numbers}`); //100,22,11

function sortNumberASC(num1, num2) {
    return num1 - num2;
}

function sortNumberDESC(num1, num2) {
    return num2 - num1;
}

//MIXED contents
let mixContents = ['a','A','1']
mixContents.sort();
console.log(mixContents);

