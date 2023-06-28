// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Method 1 - space sub-optimal
// Space Complexity : O(n)
// Time Complexity: O(n)

var moveZeroes = function (nums) {
  if (!nums.length) return [];

  const len = nums.length;
  const ans = [];
  let countZeros = 0;

  // iterate over nums to get number of zeros
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      countZeros++;
    }
  }

  // iterate over nums and push into answer arr only non-zero numbers
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      ans.push(nums[i]);
    }
  }

  // decrement countZeros and push zeros at the end of answer arr
  while (countZeros--) {
    ans.push(0);
  }

  // iterate over nums arr and replace each element with one from answer arr
  for (let i = 0; i < len; i++) {
    nums[i] = ans[i];
  }

  return nums;
};

/* 
Method 2 - two pointers
Space Complexity : O(1)
Time Complexity: O(n)
*/

var moveZeroes = function (nums) {
  let lastNonZeroFoundAt = 0;

  for (let curr = 0; curr < nums.length; curr++) {
    if (nums[curr] !== 0) {
      nums[lastNonZeroFoundAt] = nums[curr];

      lastNonZeroFoundAt++;
    }
  }

  for (let curr = lastNonZeroFoundAt; curr < nums.length; curr++) {
    nums[curr] = 0;
  }

  return nums;
};

/* 
Method 3 - two pointers, one iteration
Space Complexity : O(1)
Time Complexity: O(n)
*/
var moveZeroes = function (nums) {
  for (let curr = 0, lastNonZeroFoundAt = 0; curr < nums.length; curr++) {
    if (nums[curr] !== 0) {
      [nums[lastNonZeroFoundAt], nums[curr]] = [
        nums[curr],
        nums[lastNonZeroFoundAt],
      ];

      lastNonZeroFoundAt++;
    }
  }

  return nums;
};
