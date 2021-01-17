class Person
{
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value;
    }


}
let mum = {
    _name : 'Mum'
}



let person = new Person('Max', 27);
Reflect.defineProperty(person, 'hobbies', {
    // writable : true,
    value: ['Sports', 'Cooking'],
    // configurable : true
});
console.log(Reflect.ownKeys(person));
console.log(Reflect.get(person,'hobbies'));
person.hobbies = ['Nothing'];
console.log(person.hobbies);

Reflect.deleteProperty(person, 'age');

console.log(person.age);