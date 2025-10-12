import BankingAccount from "./BankingAccount";
import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingsAccount";

let checkingAccount: BankingAccount = new CheckingAccount(100);
let savingAccount: BankingAccount = new SavingsAccount(100);

checkingAccount.deposit(50);
checkingAccount.withdraw(120);
console.log(checkingAccount.getBalance());


savingAccount.deposit(50);
savingAccount.withdraw(120);
console.log(savingAccount.getBalance());