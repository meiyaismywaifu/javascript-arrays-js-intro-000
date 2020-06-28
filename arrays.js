var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

var array;

function addElementToBeginningOfArray(arrayInput,elementInput){
  var arrayInternal = arrayInput;
  arrayInternal = [elementInput, ...arrayInternal];
  return arrayInternal;
}

function destructivelyAddElementToBeginningOfArray(arrayInput,elementInput){
  array = [elementInput, ...arrayInput];
  return array;
}

function addElementToEndOfArray(arrayInput,elementInput){
  var arrayInternal = arrayInput;
  arrayInternal = [...arrayInternal, elementInput];
  return arrayInternal;
}

function destructivelyAddElementToEndOfArray(arrayInput,elementInput){
  arrayInput = [...arrayInput, elementInput];
  return arrayInput;
}

function accessElementInArray(){

}

function destructivelyRemoveElementFromBeginningOfArray(){

}

function destructivelyRemoveElementFromEndOfArray(){

}
