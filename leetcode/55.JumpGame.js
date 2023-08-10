// 55. Jump Game
// Medium

// https://leetcode.com/problems/jump-game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 [2,3,1,1,4]
        c t
      c t
    c t
  c t
==> true

[3,2,1,0,4]
       c t
     c   t
   c     t
 c       t
 ==> false
 */

var canJump = function (nums) {
  if (nums.length === 1) return true;

  let target = nums.length - 1;
  let curr = nums.length - 2;
  let reached = false;

  while (curr >= 0) {
    if (nums[curr] + curr >= target) {
      target = curr;
      curr--;
      reached = true;
    } else {
      curr--;
      reached = false;
    }
  }
  return reached;
};

console.log(canJump([2, 3, 1, 1, 4])); // true
console.log(canJump([3, 2, 1, 0, 4])); // false
