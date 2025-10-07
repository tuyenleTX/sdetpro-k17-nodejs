//READ-ONLY
//WRITE-ONLY
//--> BUILDER DESIGN PATTERN
// Contract --> Sign: Immutable: WRITE-ONLY
//Builder: READ-ONLY

export default class HouseWithBuilder {
    private topRoofColor: string = "Red";
    private windowNumber: number = 4;
    private color: string = "White";
    private mainDoorNumber: number = 1;

    private constructor() {

    }
    //READ ONLY
    public getTopRoofColor() {
        return this.getTopRoofColor;
    }

    public getWindowNumber() {
        return this.getWindowNumber;
    }

    public getColor() {
        return this.color;
    }

    public getMainDoorNumber() {
        return this.mainDoorNumber;
    }


    //Sale Department - Inner class - WRITE ONLY
    public static Builder = class {
        private house : HouseWithBuilder = new HouseWithBuilder();

        public setTopRoofColor(topRoofColor: string) {
            this.house.topRoofColor = topRoofColor;
        }

        public setWindowNumber(windowNumber: number) {
            this.house.windowNumber = windowNumber;
        }

        public setMaindoorNumber(maindoorNumber: number) {
            this.house.mainDoorNumber = maindoorNumber;
        }

        public setColor(color: string) {
            this.house.color = color;
        }

        //Sign the contract
        public build() : HouseWithBuilder{
            return this.house;
        }
    }
}