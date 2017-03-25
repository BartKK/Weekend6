// Atrybuty wspólne

// [[Value]], [[Writable]]
(function(){
  "use strict";
var person = {
  name: 'Konrad'
};
})();

var person = {};
Object.defineProperty(person, 'name', {
  value: 'Paweł',
  enumerable: true,
  configurable: true,
  writable: true
});

// Object.seal()
// extensible i configurable ustawia na false

(function(){
  "use strict";
var person = {
  name: 'person'
};
console.log(Object.isExtensible(person)); // true
console.log(Object.isSealed(person)); // false

Object.seal(person);
console.log(Object.isExtensible(person)); // false
console.log(Object.isSealed(person)); // true

person.sayHello = function () {
  console.log(this.name);
};

// sprawdzimy istnienie metody
console.log('sayHello' in person); //   false

person.name = 'abcd';
console.log(person.name); // ''
})();
