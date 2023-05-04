/*
https://leetcode.com/problems/rotate-array/
189. Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/
// Method 1

const nums = [1,2,3,4,5,6,7]
const k = 3

var rotate = function(nums, k) {
    
    // for k times, pop last element and add it to beginning of array

    while (k > 0) {
        const last = nums.pop();
        nums.unshift(last);
        k--;
    }

    return nums;
};

rotate(nums, k)