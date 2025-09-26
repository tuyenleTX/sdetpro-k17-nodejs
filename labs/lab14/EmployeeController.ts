import Employee from "./Employee";

export default class EmployeeController{
    public totalSalary(employeeList: Employee[]) {
        let total:number = 0;
        for(const emp of employeeList) {
            total = total + emp.getSalary() + emp.getBonus();
        }
        return total;
    }
}