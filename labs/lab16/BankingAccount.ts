export default abstract class BankingAccount {
    protected accountBalance: number;
    constructor(accountBalance: number) {
        this.accountBalance = accountBalance;
    }
    public abstract deposit(amount: number): void;
    public abstract withdraw(amount: number): void;
    public abstract getBalance(): number;
}