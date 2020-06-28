var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arrayInput,elementInput){
  var arrayInternal = [elementInput, ...arrayInput];
  return arrayInternal;
}

function destructivelyAddElementToBeginningOfArray(arrayInput,elementInput){
  array = [elementInput, ...arrayInput];
  return array;
}

function addElementToEndOfArray(arrayInput,elementInput){
  var arrayInternal = [...arrayInternal, elementInput];
  return arrayInternal;
}

function destructivelyAddElementToEndOfArray(arrayInput,elementInput){
  var arrayInput = [...arrayInput, elementInput];
  return arrayInput;
}

function accessElementInArray(){

}

function destructivelyRemoveElementFromBeginningOfArray(){

}

function destructivelyRemoveElementFromEndOfArray(){

}
