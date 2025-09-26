export default class Animal {
    protected name: string = "";
    protected speed: number = 0;
    
    constructor(name: string) {
        this.name = name;
    }
    public getSpeed():number {
        return this.speed;
    }
    public setSpeed(speed: number) {
        this.speed = speed;
    }
    public getName() {
        return this.name;
    }
    public setName(name: string) {
        this.name = name;
    }
   
}