// Atrybuty wspólne

// [[Enumerable]], [[Configurable]]

// Do zmiany tych właściwości używamy metody Object.defineProperty()

var person = {
  name: 'Ula'
};

// console.log(person.propertyIsEnumerable('name')); // true
//
// Object.defineProperty(person, 'name', {
//   enumerable: false
// });
//
//
// console.log(person.propertyIsEnumerable('name')); // false


(function(){
  "use strict";

  var person = {
    name: 'Ula'
  };
  console.log(person.propertyIsEnumerable('name')); //true

  Object.defineProperty(person, 'name', {
    configurable: false
  });

  Object.defineProperty(person, 'name', {
    enumerable: false
  });

  console.log(perosn.propertyisEnumerable('name')); //false

  Object.defineProperty(person, 'name', {
    configurable: true
  });
})();
