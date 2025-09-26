export default class Employee {
    protected salary: number;
    protected name: string = 'Employee';
    protected bonus: number = 0;
    protected workingDays: number = 0;
    constructor(salary: number) {
        this.salary = salary;
    }

    public getSalary() {
        return this.salary;
    }

    public getName() {
        return this.name;
    }

    public getBonus() {
        return this.bonus;
    }
    protected setBonus(amount: number) {
        this.bonus = amount;
    }

    public getWorkingDays() {
        return this.workingDays;
    }
    public setWorkingDays(days: number) {
        this.workingDays = days;
    }
}