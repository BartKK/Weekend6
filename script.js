// Wykrywanie właściwości

// if(person.age){
//
// }

var car = {
  manufacturer: 'Ford'
}

console.log('manufacturer' in car); // True

// Warunek if zwróci false gdy będzie równe: null, undefined, 0, false, NaN, ''

var person = {
  name: 'Maciej'
}

console.log('toString' in person);

console.info(person.hasOwnProperty('name'));
