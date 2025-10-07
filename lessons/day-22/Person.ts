export default class Person {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        if (age < 0) throw new Error("Age cannot be less than 0");
        this.name = name;
        this.age = age;
    }
}

/**
 * Acess Modifiers
 * - default (nothing) : public: everywhere
 * - protected: sub-classes
 * - private: ONLY in the class
 */