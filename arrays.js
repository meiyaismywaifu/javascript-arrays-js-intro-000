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
  console.log("array is" + array);
  return array;
}

function addElementToEndOfArray(arrayInput,elementInput){
  var arrayInternal = [...arrayInput, elementInput];
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
