class Person {


}

let numbers = [1,2,3 ];
numbers[Symbol.toPrimitive] = function(){
    return 999;
}

Person.prototype[Symbol.toStringTag] = 'Person';
let person = new Person();
console.log(person);

console.log(numbers + 1);