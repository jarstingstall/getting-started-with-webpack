export class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get display() {
        return `${this.name} is ${this.age} years old.`;
    }
}