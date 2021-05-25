// HackerRank 
// Arrays - DS https://www.hackerrank.com/challenges/arrays-ds/problem

// Reverse an array of integers.

const a = [1, 4, 3, 2];


// Method 1 - For loop 
function reverseArray(a) {
    let revArr = [];
    // start iterating from the end
    for(let i = a.length - 1; i >= 0; i--) {
        revArr.push(a[i])
    }
    return revArr;
}
//console.log(reverseArray(a)); // [ 2, 3, 4, 1 ]


// Method 2 - Using Array.prototype.reverse() 
function reverseArray(a) {
    return [].concat(a).reverse();
}
//console.log(reverseArray(a)); // [ 2, 3, 4, 1 ]


// Method 3 - Using .map() 
function reverseArray(a) {
    // starts returning array elements from the end (a.length - 1)
    return a.map( (item, i) => a[a.length - 1 - i])
}
console.log(reverseArray(a)); // [ 2, 3, 4, 1 ]

