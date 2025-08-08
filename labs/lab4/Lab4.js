const readline = require("readline-sync");

const teoAccount = {
        name: "Teo",
        accountNumber: "1234567891",
        routingNumber: "1234561",
        balance: 100
}
const tiAccount = JSON.parse(JSON.stringify(teoAccount));
tiAccount.name = "Ti";
tiAccount.accountNumber = "1234567892";

const tunAccount = JSON.parse(JSON.stringify(teoAccount));
tunAccount.name = "Tun";
tunAccount.accountNumber = "1234567893";

console.log(teoAccount);
console.log(tiAccount);
console.log(tunAccount);

const bankAccounts = [teoAccount, tiAccount, tunAccount];
//console.log(bankAccounts);

let isStillUsing = true;
while (isStillUsing) {
        printMenu();
        let selectedOption = Number(readline.question(`Please choose your option in the menu: `));
        if (selectedOption === 1) {
                let accountNumber = readline.question(`Please input the account number you are looking for:`)
                console.log(`Checking your input account ${accountNumber}`);
                const foundAccount = findAnAccount(bankAccounts, accountNumber);
                if (foundAccount != null) {
                        console.log(`Account Name: ${foundAccount.name} has balance: ${foundAccount.balance}`);
                } else {
                        console.log(`Invalid account`);
                }
        } else if (selectedOption === 2) {
                let accountNumber = readline.question(`Please input the account number:`)
                const foundAccount = findAnAccount(bankAccounts, accountNumber);
                if (foundAccount!= null) {
                        let amount = readline.question(`Please input the amount:`)
                        updateBalance(foundAccount, amount);
                        console.log(bankAccounts);
                } else {
                        console.log(`Invalid account`);
                }

        } else if (selectedOption === 0) {
                console.log(`Exit the program`);
                isStillUsing = false;
        }
}

function printMenu() {
        console.log(`
        === Banking application===
                1. Find an account
                2. Update balance
                0. Exit the program`);
}

function findAnAccount(bankAccounts, accountNumber) {
        for (const account of bankAccounts) {
                if (account.accountNumber === accountNumber) {
                        return account;   
                }
        }
        return null;
}

function updateBalance(account, amount) {
        if (account.balance < amount) {
                console.log(`Not enough money`);
        } else {
                account.balance = account.balance - amount;
        }
} 