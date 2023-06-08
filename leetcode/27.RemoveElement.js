// 27. Remove Element
// https://leetcode.com/problems/remove-element/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    if (nums[right] === val) {
      nums.pop();
      right--;
    } else {
      if (nums[left] === val) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
      left++;
    }
  }
};
