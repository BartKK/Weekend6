// Dziedziczenie - (prototype chaining)


var book = {

  title: 'Prototype chaining - inheritance'
}

var prototype = Object.getPrototypeOf(book);

console.log(prototype == Object.prototype); // true
