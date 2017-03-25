// Atrybuty wspólne

// [[Value]], [[Writable]]
(function(){
  "use strict";
var person = {
  name: 'Konrad'
};
})();

var person = {};
Object.defineProperty(person, 'name', {
  value: 'Paweł',
  enumerable: true,
  configurable: true,
  writable: true
});
