let name = 'Anna';
let age = 25;
let ageField = "age";

let obj = {
    "name" : 'Max',
    [ageField] : 28,
    "greet me"() {
        console.log(this.name + ', ', this.age);
    }
};

console.log(obj);
console.log(obj.age);
console.log(obj["age"]);
obj["greet me"]();