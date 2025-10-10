import Duck from "./Duck";
import Mute from "./Mute";
import FlyNoWay from "./FlyNoWay";
import Squeak from "./Squeak";
import Quack from "./Quack";
import FlyWithWings from "./FlyWithWings";

export default class MallarDuck extends Duck {
    constructor() {
        super(new Quack(), new FlyWithWings());
    }
}