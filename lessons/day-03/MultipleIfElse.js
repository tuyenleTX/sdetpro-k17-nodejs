const readline = require("readline-sync");

let clientAge = readline.question("How old are you?");
if (clientAge < 18) console.log("Khong ban")
else if (clientAge <= 55)
    console.log("Unlimited");
else console.log("2 chai");
