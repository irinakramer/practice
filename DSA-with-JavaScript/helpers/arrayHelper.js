function matrix(numrows, numcols, initial) {
  let arr = [];

  for (let i = 0; i < numrows; i++) {
    let cols = [];
    for (let j = 0; j < numcols; j++) {
      cols[j] = initial;
    }
    arr[i] = cols;
  }

  return arr;
}

function flatten2D(arr) {
  let flat = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      flat.push(arr[i][j]);
    }
  }

  return flat;
}

// This makes sure the data is exported in node.js —
// `require('./path/to/scripts.js')` will get you the scripts.
if (
  typeof module != 'undefined' &&
  module.exports &&
  (typeof window == 'undefined' || window.exports != exports)
)
  module.exports = { matrix, flatten2D };
