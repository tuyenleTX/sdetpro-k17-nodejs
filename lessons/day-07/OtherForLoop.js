const myArray = [1,2,3,4,5];

//FOR .. OF
for(let value of myArray) {
    console.log(value);
}

//FOR .. IN
for(const index in myArray) {
    console.log(index);
}

//FOR .. EACH
let automationUserList = [];
myArray.forEach(customLogic);
function customLogic (value, index, myArray) {
    automationUserList.push(`automationUserList_${value}@gmail.com`)
} 
console.log(automationUserList);