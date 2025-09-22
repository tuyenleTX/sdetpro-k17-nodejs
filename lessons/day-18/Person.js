class Person{
    
    constructor(name, age) {
        if(age <= 0) throw new Error("Age cannot be less than 0");
        this._name = name;
        this._age = age;
    }

    //Getters is a function that return the current
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }

    //Setters is a function 
    set name(name) {
        this._name = name;
    }
    set age(age) {
        this._age = age;
    }
}
module.exports = Person;

