// 45. Jump Game II
// Medium

// https://leetcode.com/problems/jump-game-ii

/**
 * 
 * Solution based on:
https://leetcode.com/problems/jump-game-ii/solutions/18014/concise-o-n-one-loop-java-solution-based-on-greedy/?envType=study-plan-v2&envId=top-interview-150
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
2,3,1,1,4 
      i
        e
        f
i = 0:
f = 0 or 0+2 ==> 2
if i=e (0=0) jumps = 1, e=f=2

i=1:
f= 2 or 1+3 ==> 4
if not met (1!=2)

i=2:
f= 4 or 2+1 ==> 4
if i==e (2 == 2) jumps = 2, e = 4

i=3:
f = 4 or 3+1 ==> 4
if not met (3!=4)

end of loop
 
  */
var jump = function (nums) {
  let jumps = 0,
    curEnd = 0,
    curFarthest = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    curFarthest = Math.max(curFarthest, i + nums[i]);

    if (i == curEnd) {
      jumps++;
      curEnd = curFarthest;
    }
  }

  return jumps;
};
