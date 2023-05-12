// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

//2635. Apply Transform Over Each Element in Array

/* 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.

Example 1:

Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // define new array
    const newArr = []

    // iterate over arr and apply fn to each elem
    // push modified elem into new array
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = fn(arr[i], i) 
    }
        
    // return new array
    return newArr  
};

// Pre-allocated memory solution, better performance
var map = function(arr, fn) {
    const newArr = new Array(arr.length);
    for (let i = 0; i < arr.length; ++i) {
        newArr[i] = fn(arr[i], i);
    }
    return newArr;
};

const arr = [1,2,3]
const fn = function plusone(n) { return n + 1; }

map(arr, fn)

// Other solutions
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/editorial