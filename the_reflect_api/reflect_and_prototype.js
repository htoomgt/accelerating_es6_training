class Person{
    constructor() {
        this.name = 'Max';
    }
}
let person = new Person();
Person.prototype.age = 27;
let proto = {
    age : 30
}
Reflect.setPrototypeOf(person, proto);
console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) == Person.prototype);