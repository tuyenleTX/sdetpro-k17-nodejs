import Animal from "./Animal";

export default class Horse extends Animal{
   
    constructor(name:string) {
        super(name);
    }
    public getSpeed():number {
        return Math.floor(Math.random() * 75) + 1;
    }
}