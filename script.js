


var numbers = [5, 1, 2, 3, 0, 1, 5, 0, 2];

var uniqueNumbers = [];

    for(var i in numbers){
        if(uniqueNumbers.indexOf(numbers[i]) === -1){
            uniqueNumbers.push(numbers[i]);
        }
    }
var result = uniqueNumbers.reduce(function(a, b){
  return a + b;
});

console.log(result);
