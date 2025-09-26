import Employee from "./Employee";

//Extend: IS-A relationship | 
export default class FullTimeEmployee extends Employee{
    constructor(salary: number, workingDays: number) {
        super(salary, workingDays);
        this.name = "Fulltime";
    }
   
    
}