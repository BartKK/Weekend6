//sort string


var sortString = ['fdsaas', 'fdss', 'fdsdfff', 'fdssdf'];

sortString.sort(function(a,b){
  return b.length - a.length;
});

console.log(sortString);
