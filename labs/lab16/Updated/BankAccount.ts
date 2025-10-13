export default abstract class BankAccount {
    protected balance: number = 0;
    protected minimumBalance: number = 0;

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;
    public getBalance(): number {
        return this.balance;
    }

    protected _withdraw(amount: number, errMsg: string) {
        let tempBalance = this.balance - amount;
        if (tempBalance < this.minimumBalance) {
            throw new Error(`Minimum balance must be ${this.minimumBalance}`);
        }
        this.balance -= amount;
        console.log(`[SUCCESS] withdrawing ${amount}`)
    }
}