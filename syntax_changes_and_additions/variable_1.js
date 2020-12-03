let age = 30;
let age2 = 32;

if(true){
    let age = 27;

    console.log(age);
}
function update(){
    age2 = 33;
    console.log("updated!")
}
age = 29;
console.log(age);
update();
console.log(age2)