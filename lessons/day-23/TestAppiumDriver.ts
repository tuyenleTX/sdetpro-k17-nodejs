import DriverManager from "./DriverManager";
import AppiumDriver from "./AppiumDriver";

let driverManager = new DriverManager();
let appiumDriver: AppiumDriver = driverManager.getDriver("android");

appiumDriver.launch();
appiumDriver.closeConnection();