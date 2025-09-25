"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
//IS-A relationship
class FullTimeEmployee extends Employee_1.default {
    constructor(salary) {
        super(salary);
        this.name = "Fulltime";
    }
}
exports.default = FullTimeEmployee;
//# sourceMappingURL=FulltimeEmployee.js.map