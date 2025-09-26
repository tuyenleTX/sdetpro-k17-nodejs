import Employee from "./Employee";
const MAX_BONUS = 10000;

export default class FulltimeEmployee extends Employee{
    public setSalary(workingDays:number): void {
        this.salary = 50000;
    }
    public getSalary(): number{
        this.setSalary(this.workingDays);
        return this.salary;
    }
    public setBonus(){
        this.bonus = MAX_BONUS * (this.workingDays/(365-52));
    }
    public getBonus(): number{
        this.setBonus();
        return this.bonus;
    }

}