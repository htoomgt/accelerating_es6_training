class Person {

    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value){
        if(value.length > 2){
            this._name = value;
        }
        else{
            console.log('Rejected!');
        }


    }

}

let person = new Person('Max');
console.log(person);

person.name = 'Anna';
console.log(person._name);