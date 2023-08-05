// 80. Remove Duplicates from Sorted Array II
// Medium

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1 - Solution with Map, O(n) time, O(n) space
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

// Method 2 - Modifying array in place, O(n) time, O(1) space
/**
 1,1,1,2,2,3
 c n => c=2
   c n ==> remove n, n = 2

 1,1,2,2,3  
   c n c=1 move
     c n ==> c=2
       c n c=1 move ==> loop ended

answer:
1,1,2,2,3        
  */

var removeDuplicates = function (nums) {
  let count = 1;
  let curr = 0;
  let next = 1;

  while (next < nums.length) {
    if (nums[curr] === nums[next]) {
      if (count < 2) {
        count++;
        curr++;
        next++;
      } else {
        nums.splice(next, 1);
        next = curr + 1;
      }
    } else {
      count = 1;
      curr++;
      next++;
    }
  }
};
