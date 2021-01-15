let set = new Set([1,1,1]);
set.add(2);
set.add(2);
set.add(3);
set.delete(1);
console.log(set.has(2));

for (let element of set) {
    console.log(element);
}