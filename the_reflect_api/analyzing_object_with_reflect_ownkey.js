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
console.log(Reflect.ownKeys(person));