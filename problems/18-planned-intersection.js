/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

function plannedIntersect(firstArr) {
  // Your code here
  let result = []
  return function(secondArr) {
    for (let i = 0; i < firstArr.length; i++) {
      if (secondArr.includes(firstArr[i])){
        result.push(firstArr[i]);
      }
    }
    return result;
  }
}

/* function plannedIntersect(firstArr) {
  // Return a function that accepts the second array
  return function(secondArr) {
      // Filter elements in the first array based on their presence in the second array
      return firstArr.filter(element => secondArr.includes(element));
  };
} */

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
try {
  module.exports = plannedIntersect;
} catch (e) {
  return null;
}
