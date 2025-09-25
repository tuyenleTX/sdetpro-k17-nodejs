import SalaryController from "./SalaryController";
import FullTimeEmployee from "./FulltimeEmployee";
import ParttimEmployee from "./ParttimeEmployee";


let teo = new FullTimeEmployee(20000);
console.log(teo.getName());
let ti = new ParttimEmployee(10000);
console.log(ti.getName());
const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);