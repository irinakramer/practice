// 217. Contains Duplicate

// https://leetcode.com/problems/contains-duplicate

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Methods with set
// 1. shortest lines - create set from nums
// compare size
var containsDuplicate = function (nums) {
  const set = new Set(nums);

  return set.size !== nums.length;
};

// 2. iterate over nums, add to set every num
// return true if num is already in set
var containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    else set.add(num);
  }

  return false;
};
