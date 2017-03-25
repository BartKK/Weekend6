
function accumulator(str) {
  var response = [];
  for(var i = 0; i < str.length; i++) {
    var wordz = '';
    for(var j = 0; j < i +1; j++) {
      wordz += j===0 ? str[i].toUpperCase() : str[i].toLowerCase();

    }
    response.push(wordz);
  }
  console.log(response);
}

accumulator("abcd");
