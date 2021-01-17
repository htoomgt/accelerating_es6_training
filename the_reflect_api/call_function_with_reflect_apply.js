class Person
{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(prefix) {
        console.log(prefix + 'Hello, I am ' + this.name);
    }
}

let person = Reflect.construct(Person, ['Max', 27]);
Reflect.apply(person.greet, { name : 'Anna'}, ['...'])