var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  array = [element,...array];
  return array
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
  
}
function accessElementInArray(array, index){
  return array[index];
}

function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array){
array.shift();
return array;
}
 function removeElementFromBeginningOfArray(array){
   return array.slice(1);
 }
 function destructivelyRemoveElementFromEndOfArray(array){
   array.pop();
   return array;
   
 }
  function removeElementFromEndOfArray(array) {
   array = array.slice(0, array.length-1);
   return array;
  }
 
 
 
 