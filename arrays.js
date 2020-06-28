var chocolateBars = [
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
]

function addElementToBeginningOfArray(arrayInput,elementInput){
  var arrayInternal = arrayInput;
  arrayInternal = [elementInput, ...arrayInternal];
  return arrayInternal;
}

function destructivelyAddElementToBeginningOfArray(arrayInput,elementInput){
  arrayInput = [elementInput, ...arrayInput];
  return arrayInput;
}

function addElementToEndOfArray(arrayInput,elementInput){
  var arrayInternal = arrayInput;
  arrayInternal = [...arrayInternal, elementInput];
  return arrayInternal;
}

function destructivelyAddElementToEndOfArray(arrayInput,elementInput){

}

function accessElementInArray(){

}

function destructivelyRemoveElementFromBeginningOfArray(){

}

function destructivelyRemoveElementFromEndOfArray(){

}
