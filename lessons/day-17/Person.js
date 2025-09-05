class Person{
    
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    //Getters is a function that return the current
    getName() {
        return this._name;
    }
    getAge() {
        return this._age;
    }

    //Setters is a function 
    setName(name) {
        this._name = name;
    }
    setAge(age) {
        this._age = age;
    }
}
module.exports = Person;

//Can't constraint the data / properties
let teo = new Person("Teo", 18);

//Break Encapsulation | Violation
console.log(teo._name);

console.log(teo.getName());
console.log(teo.getAge());

teo.setAge(20);
console.log(teo.getAge());