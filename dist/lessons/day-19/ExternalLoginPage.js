"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginPage_1 = require("./LoginPage");
class ExternalLoginPage extends LoginPage_1.default {
    constructor() {
        super();
        this.usernameSel = "#ext-username";
        this.passwordSel = "#ext-password";
        this.loginBtnSel = "#ext-loginBtn";
    }
}
exports.default = ExternalLoginPage;
//# sourceMappingURL=ExternalLoginPage.js.map