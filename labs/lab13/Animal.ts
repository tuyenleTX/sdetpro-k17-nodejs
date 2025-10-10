export default class Animal {
    protected name: string = "";
    protected speed: number = 0;

    constructor(name: string, speed: number) {
        this.name = name;
        this.speed = speed;
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getName() {
        return this.name;
    }


}