let obj = {
    name: 'Max',
    age: 27,
    greet: () => {
        console.log('Hello there!');
    }
};

let {name, age, greet: hello} = obj;
console.log(name, age);
hello();