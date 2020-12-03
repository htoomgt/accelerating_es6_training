//code here
let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log(typeof symbol);
console.log(symbol == anotherSymbol);

let obj = {
    name : 'max',
    [symbol] : 22
};
console.log(obj[symbol]);