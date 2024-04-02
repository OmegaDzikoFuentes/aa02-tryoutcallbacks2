/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

function minValueCallback(array, cb) {

  //store function in reusable var

  let callBack = cb;

  //store first el in given arr in variable as smallest
  let smallest = array[0];

  //loop through given arr starting at index 1 to find smallest
  for (let i = 1; i < array.length; i++) {

  //store curr value in variable
  let currVal = array[i];

  //ask if the current value is smaller than the original smallest
      if(currVal < smallest) {

  //if yes then assign curr value as smallest
          smallest = currVal;

      }

    }

  //outside loop ask if cb on value is true
  if(typeof callBack === "function") {

  //if yes return cb on value
  return callBack(smallest);

  }
  else {

  //otherwise return the value without cb

  return smallest;

  }
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = minValueCallback;
} catch(e) {
  return null;
}
