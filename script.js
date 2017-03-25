// Definiowanie właściwości

var person = {
  name: 'Kuba'
}

person.age = 12;

// [[Put]] Wewnętrzna metoda JS do tworzenia nowych właściwości

// [[Set]]
person.name = 'Bartek';

console.log(person.name); // 'Bartek'
