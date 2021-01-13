let array = [1, 2, 3];
console.log(array.copyWithin(1, 0, 2));
console.log(array);
array = [1, 2, 3];
let it = array.entries();

for(let element of it){
    console.log(element);
}