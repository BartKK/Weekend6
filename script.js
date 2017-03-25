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
  //Definiowanie wielu metod na raz w prototypie
  Person.prototype = {
    sayHello: function () {
      // asdasdasd
    },
    toString: function () {
      // asdzfzs
    }
  }
})();
