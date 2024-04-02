/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

function multiMap(val, n, cb) {

  //store value from global scope in variable in local scope for acces to loop
  let value = val;

  //loop up to n times
  for (let i = 0; i < n; i++) {

  //call cb on value stored in value variable and reasssign to value
  value = cb(value);

  }

  //return value
  return value;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = multiMap;
} catch(e) {
  return null;
}
