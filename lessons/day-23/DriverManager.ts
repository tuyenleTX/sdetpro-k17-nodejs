import AppiumDriver from "./AppiumDriver";
import AndroidDriver from "./AdroidDriver";
import IOSDriver from "./IOSDriver";

export default class DriverManager {
    public getDriver(platform: string): AppiumDriver {
        switch (platform) {
            case "android":
                return new AndroidDriver();
            case "ios":
                return new IOSDriver();
            default:
                throw new Error("The platform is not supported");
        }
    }
}