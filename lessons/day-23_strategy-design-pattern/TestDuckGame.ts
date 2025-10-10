import Duck from "./Duck";
import BabyDuck from "./BabyDuck";
import Decoy from "./Decoy";
import MallarDuck from "./MallarDuck";
import DuckController from "./DuckController";
import Quack from "./Quack";
import FlyNoWay from "./FlyNoWay";
import FlyWithWings from "./FlyWithWings";

let decoy : Duck = new Decoy();
let babyDuck: Duck = new BabyDuck();
let mallarDuck: Duck = new MallarDuck();

console.log(decoy);
console.log(babyDuck);
console.log(mallarDuck);

let duckController = new DuckController();
duckController.performQuack(decoy);
duckController.performFly(decoy);

duckController.performQuack(babyDuck);
duckController.performFly(babyDuck);

duckController.performQuack(mallarDuck);
duckController.performFly(mallarDuck);

babyDuck.setQuackBehavior(new Quack());
babyDuck.setFlyBehavior(new FlyWithWings());
duckController.performQuack(babyDuck);
duckController.performFly(babyDuck);