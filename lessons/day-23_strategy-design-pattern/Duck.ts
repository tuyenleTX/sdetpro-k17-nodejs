import QuackBehavior from "./QuackBehavior";
import FlyBehavior from "./FlyBehavior";

export default abstract class Duck{
    //Composition | HAS-A relationship
    protected quackBehavior: QuackBehavior;
    protected flyBehavior: FlyBehavior;

    constructor(quackBehavior: QuackBehavior, flyBehavior: FlyBehavior) {
        this.quackBehavior = quackBehavior;
        this.flyBehavior = flyBehavior;
    }

    public performQuack() {
        this.quackBehavior.quack();
    }

    public performFly() {
        this.flyBehavior.fly();
    }

    public setQuackBehavior(quackBehavior: QuackBehavior) {
        this.quackBehavior = quackBehavior;
    }

    public setFlyBehavior(flyBehavior: FlyBehavior) {
        this.flyBehavior = flyBehavior;
    }
}