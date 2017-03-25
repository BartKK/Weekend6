// Pin validator

function pinValidator(str) {

  var pinlen = str.length;
  var isCorrectLength = (pinlen == 4);
  var hasOnlyNumbers = str.match(/^\d+$/);

  if(isCorrectLength && hasOnlyNumbers){
    console.log(true);
  }

  console.log(false);

}

pinValidator("abcd"); // false
pinValidator("a123"); // false
pinValidator("123"); // false
pinValidator("12345"); // false
pinValidator("1234"); // true
