import SalaryController from "./SalaryController";
import FullTimeEmployee from "./FulltimeEmployee";
import ParttimEmployee from "./ParttimeEmployee";

const MAX_BONUS = 1000;

let teo = new FullTimeEmployee(20000);
teo.setWorkingDays(250);
teo.setBonus(MAX_BONUS);
console.log(`Teo's bonus: ${teo.getBonus()}`);

let ti = new ParttimEmployee(19000);

console.log(ti.getName());
console.log(`Ti's bonus: ${ti.getBonus()}`);

const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);