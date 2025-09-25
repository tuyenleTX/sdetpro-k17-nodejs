import Employee from "./Employee";

export default class ParttimEmployee extends Employee{
    constructor (salary:number) {
        super(salary);
        this.name = "Part time";
    }
}