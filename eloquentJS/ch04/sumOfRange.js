// https://eloquentjavascript.net/04_data.html

// The sum of a range

/* 
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
*/

function range(start, finish, step = start < finish ? 1 : -1) {
  let result = [];

  if (step > 0) {
    for (let i = start; i <= finish; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= finish; i += step) {
      result.push(i);
    }
  }

  return result;
}

function sum(arr) {
  let result = 0;

  for (let el of arr) {
    result += el;
  }

  return result;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
