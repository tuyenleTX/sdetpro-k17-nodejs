"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SalaryController_1 = require("./SalaryController");
const FulltimeEmployee_1 = require("./FulltimeEmployee");
const ParttimeEmployee_1 = require("./ParttimeEmployee");
let teo = new FulltimeEmployee_1.default(20000);
console.log(teo.getName());
let ti = new ParttimeEmployee_1.default(10000);
console.log(ti.getName());
const salaryController = new SalaryController_1.default();
const totalSalary = salaryController.getTotalSalary([ti, teo]);
console.log(`Total salary: ${totalSalary}`);
//# sourceMappingURL=EmployeeManagement.js.map