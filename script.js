// Usuwanie właściwości obiektu

var animal = {

gender: 'female'
};

console.log(animal.gender); // 'female'

// Jak pozbyć się właściwości z obiektu?

// Delete

delete animal.gender;
console.log(animal.gender); // 'undefined'

// Przypisanie wartości null

animal.gender = 'female';
console.log(animal.gender); // 'female'
animal.gender = null;

//doesnt work - właściwość ma wartość null i można ją wykryć poprzez użycie hasOwnProperty
console.log(animal.gender); // 'null'
console.log(animal.hasOwnProperty('gender'));
