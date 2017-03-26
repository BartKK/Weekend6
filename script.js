// Singelton

var Singelton = (function () {
  console.count();

  var instance;

  function createInstance() {
    var obj = new Object('Zostałem stworzony');
    return obj;
  }

  return {
    getInstance: function () {
      if(!instance) {
        console.log('Zwracam instancję')
        createInstance();
      }
      return instance
    }
  }
})();
function init() {
  var instance1 = Singelton.getInstance();
  var instance2 = Singelton.getInstance();

  console.log(instance1 == instance2)
}

init();
Singelton.getInstance
