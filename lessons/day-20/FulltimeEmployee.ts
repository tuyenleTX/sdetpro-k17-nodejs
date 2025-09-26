import Employee from "./Employee";

//Extend: IS-A relationship | 
export default class FullTimeEmployee extends Employee{
    constructor(salary: number) {
        super(salary);
        this.name = "Fulltime";
        //this.setBonus(1000);
    }

    public setBonus(factor: number) {
        this.bonus = factor * (this.workingDays/(365-52));
    }
}