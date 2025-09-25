"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Employee_1 = require("./Employee");
class ParttimEmployee extends Employee_1.default {
    constructor(salary) {
        super(salary);
        this.name = "Part time";
    }
}
exports.default = ParttimEmployee;
//# sourceMappingURL=ParttimeEmployee.js.map