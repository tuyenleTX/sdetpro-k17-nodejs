import Horse from "./Horse";
import Tiger from "./Tiger";
import Dog from "./Dog";


const horse = new Horse("Horse");
const tiger = new Tiger("Tiger");
const dog = new Dog("Dog");

const horseSpeed = horse.getSpeed();
const tigerSpeed = tiger.getSpeed();
const dogSpeed = dog.getSpeed();

console.log(`Horse - speed is ${horseSpeed}`);
console.log(`Tiger -  speed is ${tigerSpeed}`);
console.log(`Dog - speed is ${dogSpeed}`);

if (horseSpeed < tigerSpeed) {
    if(tigerSpeed < dogSpeed) 
        console.log(`Winner is ${dog.getName()}, with speed: ${dogSpeed}`);
    else
        console.log(`Winner is ${tiger.getName()}, with speed: ${tigerSpeed}`);
} 
else {
    if (horseSpeed > dogSpeed) 
        console.log(`Winner is ${horse.getName()}, with speed: ${horseSpeed}`);
    else 
        console.log(`Winner is ${dog.getName()}, with speed: ${dogSpeed}`);
}
