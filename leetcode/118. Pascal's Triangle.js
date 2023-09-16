// 118. Pascal's Triangle
// Easy

// https://leetcode.com/problems/pascals-triangle

/**
 * @param {number} numRows
 * @return {number[][]}
 */

/* 
Time O(n^2) | Space O(n^2)
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1

 */

var generate = function (numRows) {
    let res = [];

    for (let i = 0; i < numRows; i++) {
        let arr = new Array(i + 1);
        arr[0] = arr[arr.length - 1] = 1;

        for (let j = 1; j < arr.length - 1; j++) {
            arr[j] = res[i - 1][j - 1] + res[i - 1][j];
        }

        res.push(arr);
    }

    return res;
};

console.log(generate(5));
// [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]
