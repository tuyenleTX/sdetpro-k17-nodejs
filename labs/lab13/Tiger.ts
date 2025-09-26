import Animal from "./Animal";

export default class Tiger extends Animal{
   
    constructor(name:string) {
        super(name);
    }
    public getSpeed():number {
        return Math.floor(Math.random() * 100) + 1;
    }
}