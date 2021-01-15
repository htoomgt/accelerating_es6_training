let myMap = new Map();

myMap.set('a1', {name : 'alpha one'});
myMap.set('b2', {name : 'B2 Spirit'});

for(let item of myMap.entries()){
    console.log(item);
}
console.log(myMap.get('b2'));
