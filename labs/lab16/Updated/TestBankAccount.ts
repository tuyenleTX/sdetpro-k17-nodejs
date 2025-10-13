import CheckingAccount from "./CheckingAccount";
import SavingAccount from "./SavingAccount";

let savingAccount = new SavingAccount();
let checkingAccount = new CheckingAccount();
savingAccount.deposit(100);
checkingAccount.deposit(100);

console.log(`Saving account's balance ${savingAccount.getBalance()}`);
console.log(`Checking account's balance ${checkingAccount.getBalance()}`);

savingAccount.withdraw(100);
checkingAccount.withdraw(50);

savingAccount.withdraw(0);
//checkingAccount.withdraw(50);