import Car from "./Car";
import Engine from "./Engine";
import ElectricEngine from "./ElectricEngine";
import GasEngine from "./GasEngine";

let gasEngine = new GasEngine();
let car = new Car(gasEngine);
car.startCar();

car.changeEngine(new ElectricEngine);
car.startCar();