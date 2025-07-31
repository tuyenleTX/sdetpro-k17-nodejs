//Import as a module
const UtilMethods = require("./UtilMethods.js");

//Destructure - in case use some methods in a module
const {getUserInputNumExpression} = require("./UtilMethods.js");
let userInput = UtilMethods.getInputFromKeyboard(); //use from module & use alias
console.log(`${userInput}`);

let userInput2 = getUserInputNumExpression(); //user from destructure
console.log(`${userInput2}`);

