import Duck from "./Duck";
import Mute from "./Mute";
import FlyNoWay from "./FlyNoWay";

export default class Decoy extends Duck {
    constructor() {
        super(new Mute(), new FlyNoWay());
    }
}