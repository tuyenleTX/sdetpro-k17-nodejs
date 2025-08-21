const readline = require("readline-sync");

let givenStr = readline.question("Please input your given string: ");

const countWords = new Object();
groupWordsUsingObject(givenStr);

console.log(countWords);

function groupWordsUsingObject(giveString) {
    let individuaWords = giveString.replace(/,/gi, "").split(" ");
    console.log(individuaWords);
    for (let i = 0; i < individuaWords.length; i++) {
        if (countWords.hasOwnProperty(individuaWords[i])) {
            countWords[individuaWords[i]] += 1;
        } else {
            countWords[individuaWords[i]] = 1;
        }
    }
}

