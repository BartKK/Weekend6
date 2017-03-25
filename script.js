//

function Person(name) {
  this.name = name;


}

Person.prototype.sayHello = function (name) {
  console.log('Hello %s!', this.name)
};

var person1 = new Person('Ula');
var person2 = new Person('Maria');

console.log(person1.name, person2.name);

person1.sayHello();
person2.sayHello();


(function(){
  function Person(name) {
    this.name = name;
  }
  Person.prototype.arrPerson = [];

  var person1 = new Person('Ula');
  var person2 = new Person('Maria');

person1.arrPerson.push('czerwony');
person2.arrPerson.push('niebieski');

console.log(person1.arrPerson); // ['czerwony', 'niebieski']
console.log(person2.arrPerson); // ['czerwony', 'niebieski']
})();



(function() {
  function Person(name) {
    this.name = name;
  }
var person1 = new Person('Zosia');
var person2 = new Person('Tosia');

Object.freeze(person1);

Person.prototype.sayHi = function() {
  console.log('Hi');
};

person1.sayHi(); // Hi
person2.sayHi(); // Hi

person1.name = 'asdasdasd'; // nie zadziała
person2.name = 'asdaaszxczxcxzcsd'; // zadziała
})();
