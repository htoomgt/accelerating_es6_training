let a = 100;
function isEqualTo(number = 10, compare = 5 ){
    console.log(number);
    console.log(compare);
    return number == compare;
}
console.log(isEqualTo(10, 10));