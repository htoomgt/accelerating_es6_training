let array = Array.of(5, 10, 11);
let oldSchoolArray = [10, 12, 16];

let newArray = Array.from(oldSchoolArray, val => val * 2);

console.log(array);
console.log(array.length);
console.log(oldSchoolArray);
console.log(newArray);
newArray.fill(100, 1, 2);
console.log(newArray);

console.log(oldSchoolArray.find(val => val >= 12));
