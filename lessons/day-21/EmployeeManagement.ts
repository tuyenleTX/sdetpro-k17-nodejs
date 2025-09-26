import SalaryController from "./SalaryController";
import FullTimeEmployee from "./FulltimeEmployee";
import ParttimEmployee from "./ParttimeEmployee";

const MAX_BONUS = 1000;

let teo = new FullTimeEmployee(20000, 250);

console.log(`Teo's bonus: ${teo.getBonus()}`);

let ti = new ParttimEmployee(19000, 200);

console.log(ti.getName());
console.log(`Ti's bonus: ${ti.getBonus()}`);

const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);