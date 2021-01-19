let person = {
    age : 27,
    name : 'Max'
}
let handler = {
    get: function(target, name) {
        return name in target ? target[name] : 'No existent'
    },
    set: function(target, property, value) {
      if ( value.length >=2){
          Reflect.set(target, property, value);
      }

    }
}
var proxy = new Proxy(person, handler);
proxy.name = 'Maximilian';
console.log(proxy.name);