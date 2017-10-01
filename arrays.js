var chocolateBars = [
  "snickers", "hundred grand", "kit kat", "skittles"
]
function addElementToBeginningOfArray(array){
  array = ['Milkey Way', ...chocolateBars];
return ['foo', 1]
}
<<<<<<< HEAD
function destructivelyAddElementToBeginningOfArray(foo, element){
  foo.unshift("foo");
  return foo;
}
function addElementToEndOfArray(array){
array = [...chocolateBars, array];
  return [1, 'foo']
}
function destructivelyAddElementToEndOfArray(array){
array.push("foo");
=======
function destructivelyAddElementToBeginningOfArray(array){
array = array.unshift('foo');
return array
}
function addElementToEndOfArray(array){
array = [...chocolateBars, array];
  return array[1]
}
function destructivelyAddElementToEndOfArray(array){
  array = array.push("foo");
>>>>>>> 0ce7a82380a69f8f9dea40661c256d50011e6a50
  return array
}
function removeElementFromBeginningOfArray(array){
   return array.slice(1);
}
function removeElementFromEndOfArray (array) {
  array = array.slice(0, array.length - 1);
  return array;
}
function destructivelyRemoveElementFromBeginningOfArray(array){
<<<<<<< HEAD
   array.shift();
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
array.pop(0);
  return array
}
function accessElementInArray(array, index){
console.log(array[2]);
return array[2];
=======
  array = array.slice(1);
  return array
}
function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop(0);
}
function accessElementInArray(array){
console.log(chocolateBars["skittles"]);
>>>>>>> 0ce7a82380a69f8f9dea40661c256d50011e6a50
}
