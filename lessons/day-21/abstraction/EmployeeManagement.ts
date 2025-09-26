import FTE from "./FTE";
import PartimeEmployee from "./PartimeEmployee";
import SalaryController from "./SalaryController";





let teo = new FTE("Teo", 20000, 250);

console.log(`Teo's bonus: ${teo.getBonus()}`);

let ti = new PartimeEmployee("Ti",19000, 200);


console.log(`Ti's bonus: ${ti.getBonus()}`);

const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);