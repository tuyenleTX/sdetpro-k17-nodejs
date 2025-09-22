const Person = require("./Person");
class BonusManagement {
    getEligibleMoneyAmount(person) {
        if(person.age >= 80) return 500;
        else return 100;
    }
}
//const teo = new Person ("teo", -18);
//if age <= 0, control through constructor
const teo = new Person();
teo._age = -18;
//but if assign value -18 like teo._age = -18, cannot control
const money = new BonusManagement().getEligibleMoneyAmount(teo);
console.log(money);