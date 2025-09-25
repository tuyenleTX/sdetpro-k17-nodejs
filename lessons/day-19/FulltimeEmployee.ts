import Employee from "./Employee";

//IS-A relationship
export default class FullTimeEmployee extends Employee{
    constructor(salary: number) {
        super(salary);
        this.name = "Fulltime";
    }
}