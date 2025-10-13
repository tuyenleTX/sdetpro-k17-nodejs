import BankAccount from "./BankAccount";

export default class SavingAccount extends BankAccount {
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): void {
        const errMsg = `Insufficient balance`;
        this._withdraw(amount, errMsg);
    }
}