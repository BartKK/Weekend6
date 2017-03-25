// Konstruktory i prototypy

function Computer() {
  //
}

// new zwraca wartość
var computer1 = new Computer;
var computer2 = new Computer;


console.log(computer1.constructor == Computer); // true


////

function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log('dasd');
  };
}


var person1 = new Person('Piotr');
var person2 = new Person('Konrad');

console.log(person1.name); // 'Piotr'

(function() {
  "use strict";

  function Car(name) {
    Object.defineProperty(this, 'name', {
      get: function () {
        return name
      },
      set: function (value) {
        name = value
      }
    });

       this.brrum = function () {
         console.log("Bruuuum");
       }

  }

  var car1 = new Car('Szybki');
  car1.brrum(); // "Bruuuum"
})();
