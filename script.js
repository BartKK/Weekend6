// Dziedziczenie obiektów

var book = {

    price: 44
};

var book1 = Object.create(Object.prototype, {
    title: {
        value: 'Some another title',
        enumerable: true,
        configurable: true,
        writable: true,
    }
});

console.log(book);
console.log(book1);

//

var person1 = {
    name: 'Zuzia',
    sayHello: function () {
      console.log(this.name)
    }
};

var person2 = Object.create(person1, {
  name: {
    value: 'Ola',
    enumerable: true,
    configurable: true,
    writable: true,

  }
});

person1.sayHello(); //
person2.sayHello(); //

console.log(person1.hasOwnProperty('sayHello')); // True
console.log(person1.isPrototypeOf(person2)); // True
console.log(person2.isPrototypeOf(person1)); // false
console.log(person2.hasOwnProperty('sayHello')); // false

//
// unikanie kolizji nazw - konstruktor 'null'
var emptyObject = Object.create(null);

console.log('toString' in empyObject);
console.log('valueOf' in emptyObject);
