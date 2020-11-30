let numbers = [1,2,3];
let numbersB = [4,5,6,7,8];

let [a = "default", b, c, d] = numbers;
let [x, ...y] = numbers;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(numbers);

console.log(y);

let m = 5;
let n = 10;
[m, n] = [n, m];
console.log(n);
console.log(m);

let [s, , t] = numbers;
console.log(s,t);
let [u,v] = [1,2,3];
console.log(u,v);