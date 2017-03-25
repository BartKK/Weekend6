// Setter getter

var person = {
  _name: 'Marcin',
// Get musi zwrócić wartość
  get name() {
    console.log("Hello %s", this._name);
return this._name;
  },
  // Musi dostać argument
  set name(value) {
console.log('Zmiana wartości $', value);
this._name = value;

  }
};


console.log(person.name);

person.name = 'Zosia';
console.log(person.name);
