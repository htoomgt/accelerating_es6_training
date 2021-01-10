let obj = {
    [Symbol.iterator] : gen
}

function *gen(){
    yield 1;
    yield 2;
}

for (let element of obj){
    console.log(element)
}

let objA = {
    [Symbol.iterator] : genA
}

function *genA(end){
    for (let i = 0; i < end; i++){
        yield i;
    }
}

let it = genA(2);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

