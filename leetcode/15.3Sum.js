// 15. 3Sum
// Medium

// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// based on solution https://leetcode.com/problems/3sum/solutions/7402/share-my-ac-c-solution-around-50ms-o-n-n-with-explanation-and-comments/
/* 
Two pointers solution
Sort array first
Front and back pointers
Target is the number we need to get to sum 0
Iterate over sorted array
while front is less than back, compare sum of front and back elements 
with target:
if sum is less increment front, if sum is more decrement back
if sum is equal, then we found our number - nums[i] - and we add it to array

Then we process duplicates, see comments below.

Return answer array
*/

var threeSum = function (nums) {
  let answer = [];
  let s = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i++) {
    let target = -nums[i];
    let front = i + 1;
    let back = nums.length - 1;

    while (front < back) {
      let sum = nums[front] + nums[back];

      if (sum < target) {
        front++;
      } else if (sum > target) {
        back--;
      } else {
        let el = [];
        el.push(nums[i], nums[front], nums[back]);
        answer.push(el);

        // process duplication of Number 2
        // Rolling the front pointer to the next different number forward
        while (front < back && nums[front] == el[1]) front++;

        // processing duplication of Number 3
        // Rolling the back pointer to the next different nubmer backward
        while (front < back && nums[back] == el[2]) back--;
      }
    }

    // Processing duplication of Number 1
    while (i + 1 < nums.length && nums[i + 1] == nums[i]) i++;
  }

  return answer;
};
