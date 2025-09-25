"use strict";
//user-defined data
//focus into properties: salary
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(salary) {
        this.name = 'Employee';
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
    getName() {
        return this.name;
    }
}
exports.default = Employee;
//# sourceMappingURL=Employee.js.map