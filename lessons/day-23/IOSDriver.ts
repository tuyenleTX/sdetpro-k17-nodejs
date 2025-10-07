import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver {
    public launch(): void {
        console.log("Launching IOS App")
    }

    public closeConnection(): void {
        console.log("Closing connection for IOS");
    }


}