setTimeout(a => console.log("Hello timeout!"), 1000);

function fn(){
    console.log(this);
}
//fn();

let fn2 = () => console.log(this);

fn2();