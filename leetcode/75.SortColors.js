// 75. Sort Colors
// Medium

// https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * APPROACH 1
 * 
[2,0,2,1,1,0]
Create new array of ones:
[1,1,1,1,1,1]
left = 0
right = 5

Iterate over nums and place 0s on the left of ones
and place 2s on the right of ones.
Ones becomes the answer
[0,0,1,1,2,2]

Iterate over nums and replace its elements with the elements 
from the answer array (ones)

Time O(N)
Space O(N)
  */

var sortColors = function (nums) {
  let ones = new Array(nums.length).fill(1);
  let left = 0;
  let right = nums.length - 1;

  for (let el of nums) {
    if (el === 0) {
      ones[left] = el;
      left++;
    } else if (el === 2) {
      ones[right] = el;
      right--;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = ones[i];
  }
};

// APPROACH2
// [2,0,2,1,1,0]
// [0,0,1,1,2,2]
//    l
//      i
//        r

// while index <= r
//   if arr[i] is 2
//     swap arr[i] and arr[r]
//     r--
//   if arr[i] is 1
//     i++
//   if arr[i] is 0
//     swap arr[i] and arr[l]
//     i++
//     l++

// time O(N)
// space O(1)

function sortColor(arr) {
  let left = 0;
  let index = 0;
  let right = arr.length - 1;

  while (index <= right) {
    if (arr[index] === 2) {
      [arr[index], arr[right]] = [arr[right], arr[index]];
      right--;
    } else if (arr[index] === 1) {
      index++;
    } else {
      // 0
      [arr[index], arr[left]] = [arr[left], arr[index]];
      index++;
      left++;
    }
  }

  return arr;
}
