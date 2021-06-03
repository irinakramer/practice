// HackerRank - Arrays -  Left Rotation
// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d , rotate the array that many steps left and return the result.

let array = [1, 2, 3, 4, 5];
d = 4;

//  Method 1 - using for loop
function rotateLeft(d, arr) {
    let temp;
    for (let i = 0; i < d; i++) {
        temp = arr[0];
        arr.shift(arr[0]);
        arr.push(temp);
    }
    return arr;
}

console.log(rotateLeft(d, array)); // [ 5, 1, 2, 3, 4 ]


// Method 2 - using slice()
function rotateLeft(d, arr) {
    const left = arr.slice(d);      // [ 5 ]
    const right = arr.slice(0, d);  //[ 1, 2, 3, 4 ]
    return left.concat(right);      // [ 5, 1, 2, 3, 4 ]
}
