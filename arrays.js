var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  let newArr = array.unshift(element);
  return newArr;
}
function accessElementInArray(array, index){
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 function 