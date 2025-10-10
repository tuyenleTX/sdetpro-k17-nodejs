import QuackBehavior from "./QuackBehavior";

export default class Quack implements QuackBehavior{
    quack(): void {
        console.log("I am quack");
    }
    
}