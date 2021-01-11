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
        try {
            yield i;
        }catch(e){
            console.log(e);
        }
    }
}

let it = genA(2);
console.log(it.next());
console.log(it.throw('An error ocurred'));
console.log(it.return('An error ocurred'));
console.log(it.next());

