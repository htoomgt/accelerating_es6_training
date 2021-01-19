let person = {
    age : 27,
    name : 'Max'
}
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'No existent'
    },

}
var proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(person, proxy);
console.log(person.hobbies);