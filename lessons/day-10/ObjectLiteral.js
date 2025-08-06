let teoName = "Tel";
let teoAge = "21";
let teoGender = "M";

//Create
let teoInfo = {
    name: "Teo",
    age: 21, 
    "my gender": "M",
    sayHello: function() {
        console.log(`Hello!`);
    },
    anotherNestedObject: {
        anotherInfo: ""
    }
}
//Read
console.log(`Teo's name: ${teoInfo.name}`);
console.log(`Teo's gender: ${teoInfo["my gender"]}`);

//Destructure
//way 1: 
//const name = teoInfo.name;
//const age = teoInfo.age;
//way 2:
const {name, age, ["my gender"]: gender} = teoInfo;

console.log(`${name}`);
console.log(`${age}`);
console.log(`${gender}`);

teoInfo.age = 22;
console.log(teoInfo);

//delete 
delete teoInfo["my gender"];
console.log(teoInfo);
teoInfo.gender = 'M';
console.log(teoInfo);



