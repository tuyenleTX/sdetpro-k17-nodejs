import Employee from "./Employee";


export default class SalaryController {
    public getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const emp of employeeList) {
            
            totalSalary = totalSalary + emp.getSalary() + emp.getBonus();
        }
        return totalSalary;
    }
}