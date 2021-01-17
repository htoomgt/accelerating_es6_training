class Person {
    constructor(name) {

    }
}
function TopObj(){
    this.age = 27;
}

let person = Reflect.construct(Person, ['Max'], TopObj);
// let person = new Person;
console.log(person.__proto__ == TopObj.prototype );