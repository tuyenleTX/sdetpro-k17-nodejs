import Employee from "./Employee";

export default class Utils{
    public sortBySalary(employeeList: Employee[]) {
        for(let i = 0; i < employeeList.length - 1; i ++) {
            for (let j = i + 1; j < employeeList.length; j ++) {
                if((employeeList[i].getSalary()+employeeList[i].getBonus()) < (employeeList[j].getSalary()+employeeList[j].getBonus())) {
                    let temp = employeeList[i];
                    employeeList[i] = employeeList[j];
                    employeeList[j] = temp;
                }
            }
        }
    }
}