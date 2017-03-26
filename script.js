// Metody dziedziczone po Object.prototype

// hasOwnProperty()
// propertyIsEnumerable()
// isPrototypeOf()
// valueOf()
// toString()

///

var now = new Date();
var earlier = new Date(2017, 01, 01); // 2017-01-01

console.log(now > earlier);

// valueOf()

var string = 'Hello world';
var response = string.valueOf();
console.log(response); // 'Hello world'


// toString()

var book = {
  title: "Very interesting title"
};

var message = 'Book' + book;
console.log(message); // 'book = [object Object]'

//
var book = {
  title: 'Very interesting title',
  toString: function () {
    return '[Book with title of ' + this.title; + ']'
  }
};

var message = 'Book = ' + book;
console.log(message); // Book = [Book with title of Very interesting title]
