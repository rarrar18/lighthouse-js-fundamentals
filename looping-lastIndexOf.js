function lastIndexOf(array, value){
  let output = 0; //sets beginning output
  let valueOccurs = false; //sets boolean to check value
  
  for (var i = 0; i < array.length; i++){
    //iterates through to array to find a match
    if (array[i] === value){
      output = i; //the index of the match
      valueOccurs = true;
    }
  }
  //if there is a match, the index is returned
  if (valueOccurs === true){
    return output;
  } else {
  //otherwise index is returned as -1
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);