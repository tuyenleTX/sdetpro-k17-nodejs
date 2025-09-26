export default class Employee {
    protected salary: number;
    protected name: string = 'Employee';
    protected bonus: number = 0;
    protected workingDays: number = 0;
    constructor(salary: number, workingDays: number) {
        this.salary = salary;
        this.bonus = 0;
        this.workingDays = workingDays;
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
    protected setBonus(bonus:number) {
        this.bonus = bonus;
    }

    public getWorkingDays() {
        return this.workingDays;
    }
    public setWorkingDays(days: number) {
        this.workingDays = days;
    }
}