class Person{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log('Hello, my name is ' + this.name);
    }

}

let person = new Person('Maxthon');
// console.log(person);
person.greet();