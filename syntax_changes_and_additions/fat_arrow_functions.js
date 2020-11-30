let bar = () => "Hello Moon!";
console.log(bar());

let foo = () => {
    return "Hello World!";
}
console.log(foo());

var fn = () => {
    let a = 2;
    let b = 3;
    return a + b;
}
console.log(fn());

let fnAdd = (a,b)=>{
    return a+b;
}
console.log(fnAdd(3,8));

setTimeout(a => console.log("Hello timeout!"), 1000);