"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SalaryController {
    getTotalSalary(employeeList) {
        let totalSalary = 0;
        for (const emp of employeeList) {
            totalSalary = totalSalary + emp.getSalary();
        }
        return totalSalary;
    }
}
exports.default = SalaryController;
//# sourceMappingURL=SalaryController.js.map