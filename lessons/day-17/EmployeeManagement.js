const Employee = require("./EmployeeModel")
const SalaryController = require("./SalaryController");

let teo = new Employee(5000);
let ti = new Employee(10000);

const salaryController = new SalaryController();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);