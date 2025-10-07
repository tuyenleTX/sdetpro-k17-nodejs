import House from "./HouseWithBuilderDesignPattern";

let builder = new House.Builder();
builder.setTopRoofColor("Red");
builder.setColor("Green");
builder.setMaindoorNumber(2);
builder.setWindowNumber(6);
let myHouse:House = builder.build();

console.log(myHouse);