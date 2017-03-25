// Atrybuty wspólne

// Object.freeze(); - po wykonaniu nie można dodawać ani usuwać właściwości

(function(){
  "use strict";
var person = {
  name: 'Konrad'
};
console.log(Object.isExtensible(person)); //True
console.log(Object.isFrozen(person)); // False

Object.freeze(person);
console.log(Object.isFrozen(person)); // True

person.sayGoodbye = function () {
  console.log('say Goodbye', this.name);
};
console.log('sayGoodbye' in person); // False

person.name = 'Piotr';
console.log(person.name); // Konrad
})();
