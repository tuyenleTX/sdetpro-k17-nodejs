"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ExternalLoginPage_1 = require("./ExternalLoginPage");
const InternalLoginPage_1 = require("./InternalLoginPage");
const LoginTestFlow_1 = require("./LoginTestFlow");
let internalLoginPage = new InternalLoginPage_1.default();
let externalLoginPage = new ExternalLoginPage_1.default();
let loginTestFlow = new LoginTestFlow_1.default();
loginTestFlow.login("teo", "neverknow", internalLoginPage);
loginTestFlow.login("ti", "everyoneknow", externalLoginPage);
//# sourceMappingURL=LoginPageTest.js.map