//STRING IS IMMUTABLE
let myString = '      Hello, day la dau nhay don \'        ';
console.log(myString);

const strLength = myString.length;
console.log(strLength);

console.log(myString.charAt(5));

//get a character at a position
for(let i = 0; i < myString.length; i ++) {
    //console.log(myString.charAt(i));
}

//get rid of spaces at beginning and end of string
console.log(myString.trim());
console.log(myString);

//replace
let encodedStr = "tmoi mnay gmap MmnhaMu 7h"
console.log(encodedStr.replaceAll('m', ''))
console.log(encodedStr);

//regex - Regular Expression
console.log(encodedStr.replace(/m/, ""));//only replace 1
console.log(encodedStr.replace(/m/g, ""));//replace all

console.log(encodedStr.replace(/m/gi, ""));//replace m & M

/**
 * Preparation: 30 mins
 * Codking: 120 mins
 * Total: 150 mins
 */

 let totalCookingTimeStr = "Total: 150 mins";
 let totalCookingTime = totalCookingTimeStr.replace(/[^0-9]/gim,"");
 console.log(totalCookingTime);

 let str1 = "Hello";
 let str2 = ", my name is Teo, ";
 let finalStr = (str1 + str2).concat('what is your name?');
 console.log(finalStr);

 //sub string
 console.log(str2.substring(0, 5)); //from 0 -> end index -1

 //split
 console.log(finalStr.split(" "));