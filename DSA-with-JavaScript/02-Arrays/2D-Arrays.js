Array.matrix = function (numrows, numcols, initial) {
  let arr = [];

  for (let i = 0; i < numrows; i++) {
    let cols = [];
    for (let j = 0; j < numcols; j++) {
      cols[j] = initial;
    }
    arr[i] = cols;
  }

  return arr;
};

let zeros = new Array.matrix(3, 5, 0);
console.log(zeros);
// ================ //

var grades = [
  [89, 77, 78, 1],
  [76, 82, 81, 1],
  [91, 94, 89, 1],
];

function averages(grades) {
  let result = '';

  for (let row = 0; row < grades.length; row++) {
    let average = 0;
    let total = 0;

    for (let col = 0; col < grades[row].length; col++) {
      total += grades[row][col];
    }

    average = total / grades[row].length;

    result += `\nStudent ${row + 1} average is ${average.toFixed(2)}`;
  }

  return result;
}

console.log(averages(grades));
// ==================  //

// helper to get an array of column values
// n is the index of the column
function oneCol(array, n) {
  return array.map((el) => el[n]);
}

// Find averages of column values
function testAverages(grades) {
  let result = '';
  const cols = grades[0].length;

  for (let i = 0; i < cols; i++) {
    let total = 0;
    let average = 0.0;

    // total for each col
    total = oneCol(grades, i).reduce((acc, curr) => (acc += curr));

    average = total / grades.length;

    result += `\nTest ${i + 1} average is ${average.toFixed(2)}`;
  }

  return result;
}

console.log(testAverages(grades));
