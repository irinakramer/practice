// 189. Rotate Array
// Medium

// https://leetcode.com/problems/rotate-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
[1,2,3,4,5,6,7]
[5,6,7,1,2,3,4]
  */

// Method 1 - create partial arrays, O(n)
var rotate = function (nums, k) {
  if (k > nums.length) {
    k = k % nums.length;
  }

  const arr1 = [],
    arr2 = [];

  for (let i = 0; i < nums.length - k; i++) {
    arr1.push(nums[i]);
  }

  for (let j = nums.length - k; j < nums.length; j++) {
    arr2.push(nums[j]);
  }

  const temp = arr2.concat(arr1);

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
};

// TODO - add other solutions, try for O(1)
