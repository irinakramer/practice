// 80. Remove Duplicates from Sorted Array II
// Medium

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  let map = new Map();
  let temp = [];

  let i = 0;
  while (i < nums.length) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
      temp.push(nums[i]);
      i++;
    } else if (map.get(nums[i]) === 1) {
      map.set(nums[i], 2);
      temp.push(nums[i]);
      i++;
    } else {
      i++;
    }
  }

  nums.splice(temp.length);

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }
};
