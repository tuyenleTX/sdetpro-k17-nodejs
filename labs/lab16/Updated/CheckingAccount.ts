import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {
    constructor() {
        super();
        this.minimumBalance = 50;
    }
    public deposit(amount: number): void {
        this.balance += amount;
    }
    public withdraw(amount: number): void {
        const errMsg = `Checking account must have minimum balance as ${this.minimumBalance}`;
        this._withdraw(amount, errMsg);
    }
}