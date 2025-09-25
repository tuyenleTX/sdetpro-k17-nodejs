"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginPage {
    constructor() {
        this.usernameSel = "";
        this.passwordSel = "";
        this.loginBtnSel = "";
    }
    inputUsername(username) {
        console.log(`Input username for selector: ${this.usernameSel}`);
    }
    inputPassword(password) {
        console.log(`Input password for selector: ${this.passwordSel}`);
    }
    clickOnLoginBtn() {
        console.log(`Click on Login button: ${this.loginBtnSel}`);
    }
}
exports.default = LoginPage;
//# sourceMappingURL=LoginPage.js.map