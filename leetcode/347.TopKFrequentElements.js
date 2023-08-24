// 347. Top K Frequent Elements
// Medium

// https://leetcode.com/problems/top-k-frequent-elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 1,1,1,2,2,3
           ^
 map
 {
    1:3
    2:2
    3:1
 }
 convert to array
sort by values
array slice (0, k)
return keys

Time O(n) | Space O(n)
  */
var topKFrequent = function (nums, k) {
    let map = {};
    let sorted = [];

    for (let el of nums) {
        if (!map[el]) {
            map[el] = 1;
        } else {
            map[el] += 1;
        }
    }

    for (let el in map) {
        sorted.push([el, map[el]]);
    }

    // sort array by values, slice from 0 to k, return keys
    return sorted
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((el) => el[0]);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [ '1', '2' ]
