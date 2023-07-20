let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]
