let obj1 = {a:1};
let obj2 = {b:2};

let set = new WeakSet([obj1, obj2, obj2]);

set.delete(obj2);
console.log(set.has(obj2));
set.add(obj1);