// Modyfikowanie prototypów

Object.prototype.add = function (val) {
  return this + val;
};

var book = {
  title: 'Some title'
};

console.log(book.add(9)); // '[object Object]9'
console.log('tytuł'.add(' książki')); //

console.log(document.add(true));

// zabezpieczenie

var empty = {};
for(var property in empty) {
  if(empty.hasOwnProperty(property)) {
    console.log(property);
  }
}
