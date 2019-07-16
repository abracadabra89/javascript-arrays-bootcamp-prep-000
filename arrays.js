var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  let newArr = array.unshift(element);
  return newArr;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element);
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
 function destructivelyRemoveElementFromEndOfArray(array){
   return array.pop();
   
 }
  function removeElementFromEndOfArray(array) {
   array.slice(0, array.length-1);
   return array;
  }
 
 
 
 