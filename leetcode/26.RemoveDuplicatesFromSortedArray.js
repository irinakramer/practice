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

// Method 2: shift elements
// O(n^2) time | O(1) space
var removeDuplicates2 = function (nums) {
  function shift(i) {
    for (let index = i + 1; index < nums.length; index++) {
      nums[index - 1] = nums[index];
    }
  }

  let i = 1;
  while (i < nums.length) {
    if (nums[i - 1] === nums[i]) {
      shift(i);
      nums.pop();
    } else {
      i++;
    }
  }

  return nums.length;
};

console.log(removeDuplicates2([1, 1, 2])); // 2
console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4])); // 5

// Method 3 - Optimal solution
// O(n) time | O(1) space
var removeDuplicates3 = function (nums) {
  let left = 1,
    right = 1;

  while (right < nums.length) {
    // compare prev of left to right
    if (nums[left - 1] === nums[right]) {
      right++;
    } else {
      nums[left] = nums[right];
      right++;
      left++;
    }
  }

  return left;
};

console.log(removeDuplicates3([0, 0, 1, 1, 1, 2, 2, 3, 3, 3, 4])); // 5
