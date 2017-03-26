// Dziedziczenie konstruktorów


//human
  function VeryFriendlyConstructor () {
    //sdfsdf
  }

  // js

// !!VeryFriendlyConstructor jest podtypem Object!!
// !!Object jest supertypem VeryFriendlyConstructor!!
  VeryFriendlyConstructor.prototype = Object.create(Object.prototype, {
    constructor: {
      value: VeryFriendlyConstructor,
      configurable: true,
      writable: true,
      enumerable: true
    }
  });


//

function Rectangle(length, width) {
console.log('Został wywołany Rectangle')
  this.length = length;
  this.width = width;;
}

Rectangle.prototype.getArea = function () {
  return this.length * this.width;
};

Rectangle.prototype.toString = function () {
  return '[Rectangle' + this.length + ' ' + this.width + ']';
}


function Square(size) {
  this.length = size;
  this.width = size;
}

//

Square.prototype = new Rectangle();
Square.prototype.constructor = Square;

Square.prototype.toString = function () {
  return '[Square ' + this.length + ' na ' + this.width + ']'
};

var rect = new Rectangle(5, 10);
var square = new Square(6);


console.log(rect.getArea()); // 50

console.log(square.getArea()); // 36

console.log(rect.toString()); // 'Rectangle'
console.log(square.toString()); // 'Square'

console.log(rect instanceof Rectangle); // true
console.log(rect instanceof Square); // False
console.log(rect instanceof Object); // true

console.log(square instanceof Square); // True
console.log(square instanceof Rectangle); // True
console.log(square instanceof Object); // True
