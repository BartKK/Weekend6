// Wyliczenia

var obj = {
  string: 'abc',
  length: 24
};

for(var property in obj) {
  console.log(property); // nazwa właściwości
  console.log(obj[property]); // wartość właściwości
}

console.log(Object.keys(obj)); // _proto_ nie będzie wylistowane, bo enumerable jest na false
console.log(property.propertyIsEnumerable('__proto__'));
