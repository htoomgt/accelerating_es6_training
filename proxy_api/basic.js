let person = {
    age : 27
}
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'No existent'
    }
}
var proxy = new Proxy(person, handler);
console.log(proxy.name);