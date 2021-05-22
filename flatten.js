// Without using .flat(), create a function to flatten an array

// Multidimensional array:
const exampleArray = [1,2, [3,4, [5,6,7], 8], 9,10];

function flatten(arr) {
    // recursion
    let flatArr = arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            acc = acc.concat(flatten(curr))
        } else {
            acc.push(curr);
        }
        return acc;
    }, [] );
    
    return flatArr;
}


console.log(flatten(exampleArray));
// [1,2,3,4,5,6,7,8,9,10]

// ES6 version:
var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}
console.log(flattenDeep(arr1)); 
// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

// ================================================= //
// Two-dimensional array
const twoDimArray = [[1, 2], [3], [4, 5, 6]];

function flattenTwoDim(arr) {
    let flatArr = [].concat(...twoDimArray);
    return flatArr;
}
console.log(flattenTwoDim(twoDimArray));
// [ 1, 2, 3, 4, 5, 6 ]


