import FulltimeEmployee from "./FulltimeEmployee";
import PartimeEmployee from "./PartimeEmployee";
import EmployeeController from "./EmployeeController";
import Utils from "./Utils";

let empTeo = new FulltimeEmployee("Teo", 250);
let empTi = new PartimeEmployee("Ti", 230);
let empTun = new FulltimeEmployee("Tun", 260);
let empBap = new FulltimeEmployee("Bap", 230);
let empMia = new PartimeEmployee("Mia", 250);

console.log(empTeo.getSalary() + empTeo.getBonus());
console.log(empTi.getSalary() + empTi.getBonus());
console.log(empTun.getSalary() + empTun.getBonus());
console.log(empBap.getSalary() + empBap.getBonus());
console.log(empMia.getSalary() + empMia.getBonus());
let empController = new EmployeeController();
const employeeList = [empTeo, empTi, empTun, empBap, empMia]
let totalSalary = empController.totalSalary(employeeList);
console.log(`Total salary: ${totalSalary}`);

const utils = new Utils();
utils.sortBySalary(employeeList);
console.log(employeeList);

console.log(`Employee with highest salary: ${employeeList[0].getName()}`);
console.log(`Employee with lowest salary: ${employeeList[employeeList.length-1].getName()}`);