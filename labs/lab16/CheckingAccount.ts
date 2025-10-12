import BankingAccount from "./BankingAccount";

const MIN_BALANCE = 50;
export default class CheckingAccount extends BankingAccount {

    public deposit(amount: number): void {
        console.log(`Adding ${amount} to checking account`);
        this.accountBalance += amount;
    }

    public withdraw(amount: number): void {
        console.log(`Withdrawing ${amount} from checking account`);
        if (this.accountBalance < amount) {
            console.log("Your balance is not enough, please choose smaller amount");
            return;
        } else if (this.accountBalance - amount < MIN_BALANCE) {
            console.log(`Checking account should have at least ${MIN_BALANCE}`);
            return;
        } else {
            this.accountBalance -= amount;
        }
    }

    public getBalance(): number {
        console.log('Current balance of checking account:');
        return this.accountBalance;
    }
}