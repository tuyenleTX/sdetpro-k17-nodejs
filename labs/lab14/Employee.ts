export default abstract class Employee{
    protected name: string;
    protected salary: number=0;
    protected workingDays: number=0;
    protected bonus: number=0;
    constructor(name:string, workingDays:number) {
        this.name = name;
        this.workingDays = workingDays;
        
    }
    protected abstract setSalary(workingDays:number):void;
    protected abstract setBonus(bonus:number): void;
    public getName():string {
        return this.name;
    }
    public abstract getSalary():number;
    public abstract getBonus():number;


}