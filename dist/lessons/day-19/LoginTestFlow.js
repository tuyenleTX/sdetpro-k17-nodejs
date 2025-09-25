"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginTestFlow {
    login(username, password, loginPage) {
        loginPage.inputUsername(username);
        loginPage.inputPassword(password);
        loginPage.clickOnLoginBtn();
    }
}
exports.default = LoginTestFlow;
//# sourceMappingURL=LoginTestFlow.js.map