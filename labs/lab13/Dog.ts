import Animal from "./Animal";

export default class Dog extends Animal{
   
    constructor(name:string) {
        super(name);
    }
    public getSpeed():number {
        return Math.floor(Math.random() * 60) + 1;
    }
}