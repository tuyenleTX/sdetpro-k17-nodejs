import Employee from "./Employee";

export default class PartimeEmployee extends Employee{
    public setSalary(workingDays:number): void {
        this.salary = 40000*(workingDays/365);
    }
    public getSalary(): number{
        this.setSalary(this.workingDays);
        return this.salary;
    }
    public setBonus(){
        this.bonus = 0;
    }
    public getBonus(): number{
        this.setBonus();
        return this.bonus;
    }
}