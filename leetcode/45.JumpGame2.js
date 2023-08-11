// 45. Jump Game II
// Medium

// https://leetcode.com/problems/jump-game-ii

var jump = function (nums) {
  if (nums.length === 1) return 1;

  let target = nums.length - 1;
  let curr = nums.length - 2;
  let count = 0;

  while (curr >= 0) {
    if (nums[curr] + curr >= target) {
      target = curr;
      curr--;
      count++;
    } else {
      curr--;
    }
  }
  return count;
};
