var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function destructivelyAddElementToBeginningOfArray(array, element){
  let newArr = array.unshift(element);
  return newArr;
}
