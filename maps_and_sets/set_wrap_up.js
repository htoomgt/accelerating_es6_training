let set = new Set([1,1,1]);
set.add(2);

for (let element of set.entries()) {
    console.log(element);
}