// 977. Squares of a Sorted Array

// https://leetcode.com/problems/squares-of-a-sorted-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 Method 1 (trivial) - sqare and then sort
 Time complexity - O(n)
 Space complexity - O(n)
 */

var sortedSquares = function (nums) {
  const result = nums.map((num) => num * num);

  return result.sort((a, b) => a - b);
};

/**
 Method 2 - sqare and sort in nested loop
 Time complexity - O(n^2)
 Space complexity - O(n)
 */
var sortedSquares = function (nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * nums[i]);

    for (let j = i + 1; j > 0; j--) {
      let prev = j - 1;
      if (result[prev] > result[j]) {
        [result[prev], result[j]] = [result[j], result[prev]];
      }
    }
  }

  return result;
};

/**
 Method 3 (optimal) - two pointers from opposing ends
 Time complexity - O(n)
 Space complexity - O(n)
 */

var sortedSquares = function (nums) {
  const result = new Array(nums.length);
  let left = 0,
    right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }

  return result;
};
