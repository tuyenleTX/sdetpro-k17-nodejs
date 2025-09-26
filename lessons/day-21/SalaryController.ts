import Employee from "./Employee";
const MAX_BONUS = 1000;

export default class SalaryController {
    public getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const emp of employeeList) {
            
            totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
        }
        return totalSalary;
    }
}