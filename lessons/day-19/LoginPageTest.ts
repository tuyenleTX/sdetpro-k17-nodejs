import ExternalLoginPage from "./ExternalLoginPage";
import InternalLoginPage from "./InternalLoginPage";
import LoginTestFlow from "./LoginTestFlow";

let internalLoginPage = new InternalLoginPage();

let externalLoginPage = new ExternalLoginPage();

let loginTestFlow = new LoginTestFlow();
loginTestFlow.login("teo","neverknow", internalLoginPage);
loginTestFlow.login("ti","everyoneknow", externalLoginPage);