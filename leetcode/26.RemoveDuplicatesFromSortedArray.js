// 26. Remove Duplicates from Sorted Array
// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Accepted solution
var removeDuplicates = function (nums) {
  let left = 0,
    right = nums.length - 1,
    ans = 0;

  const set = new Set();

  while (left <= right) {
    if (!set.has(nums[left])) {
      set.add(nums[left]);
      left++;
    } else {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      nums.pop();
      right--;
    }
  }

  nums.sort((a, b) => a - b);

  return nums.length;
};

// TODO - another more optimal solution
