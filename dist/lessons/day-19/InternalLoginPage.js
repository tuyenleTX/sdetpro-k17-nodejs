"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("./LoginPage");
class InternalLoginPage extends LoginPage_1.default {
    constructor() {
        super();
        this.usernameSel = "#username";
        this.passwordSel = "#password";
        this.loginBtnSel = "#loginBtn";
    }
}
exports.default = InternalLoginPage;
//# sourceMappingURL=InternalLoginPage.js.map