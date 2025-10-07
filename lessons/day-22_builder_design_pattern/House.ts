export default class House {
    private topRoofColor: string = "";
    private windowNumber: number = 0;
    private color: string = "";
    private mainDoorNumber: number = 0;

    /*constructor(topRoofColor: string, windowNumber: number, color: string, mainDoorNNumber: number) {
        this.topRoofColor = topRoofColor;
        this.windowNumber = windowNumber;
        this.color = color;
        this.mainDoorNumber = mainDoorNNumber;
    }*/

    //SETTERS
    public setTopRoofColor(topRoofColor:string):void {
        this.topRoofColor = topRoofColor;
    }

    public setWindownNumber (windowNumber:number) {
        this.windowNumber = windowNumber;
    }
}

// Properties values are interchangeable by mistake
let nhacap4 = new House();
nhacap4.setTopRoofColor("red");
nhacap4.setWindownNumber(4);
console.log(nhacap4);