// https://leetcode.com/problems/filter-elements-from-array
// 2634. Filter Elements from Array

/* 
Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.

*/

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const newArr = []

    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i) && newArr.push(arr[i])
    }

    return newArr; 
};