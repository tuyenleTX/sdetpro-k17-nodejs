import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {
    public deposit(amount: number): void {
        console.log(`Adding ${amount} to saving account`);
        this.accountBalance += amount;
    }

    public withdraw(amount: number): void {
        console.log(`Withdrawing ${amount} from saving account`);
        if (this.accountBalance < amount) {
            console.log("Your balance is not enough, please choose smaller amount");
            return;
        }
        this.accountBalance -= amount;
    }

    public getBalance(): number {
        console.log('Current balance of saving account:');
        return this.accountBalance;
    }
}