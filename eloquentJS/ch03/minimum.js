// https://eloquentjavascript.net/03_functions.html

/* 
Minimum

Write a function min that takes two arguments and returns their minimum.
 */

function min(a, b) {
  if (a === b) return a;

  if (a < b) return a;
  else return b;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
console.log(min(1, 1));
// → 1
