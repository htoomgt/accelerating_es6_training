class Helper {
    static logTwice(message){
        console.log(message);
        console.log(message);
    }
}
Helper.logTwice("Logged!")

class Person{
    constructor(name){
        this.name = name;
        this.age = 20;
    }
    greet(){
        console.log('Hello, my name is ' + this.name + ". I'm "+ this.age + " years old.");
    }

}

class Max extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    greet() {
        console.log("Hello");
    }

    greetTwice(){
        super.greet();
        super.greet();
    }
}

let person = new Person('Maxthon');
let max = new Max('Max', 27);
// console.log(person);
person.greet();
max.greet();
max.greetTwice();
console.log(person.__proto__ === Person.prototype);
console.log(max.__proto__ === Person.prototype);