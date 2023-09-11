// 15. 3Sum
// Medium

// https://leetcode.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/* 
Two pointers and variable sliding window solution
Time O(n^2) | Space O(nlogn) b/c of sorting

Sort array first
L and R pointers
Target is the number we need to get to sum 0 (it's the opposite of nums[i])
Iterate over sorted array
while L is less than R, compare sum of L and R values with the target: 
if sum is less increment L, 
if sum is more decrement R
if sum is equal, then we found our numbers and we add them to the triplet

Then we process duplicates, see comments below.

Return result array
*/

function threeSum(nums) {
    const result = [];
    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        let triplet = [];
        let L = i + 1;
        let R = nums.length - 1;
        let target = -nums[i];

        while (L < R) {
            if (nums[L] + nums[R] > target) {
                R--;
            } else if (nums[L] + nums[R] < target) {
                L++;
            } else {
                triplet = [nums[i], nums[L], nums[R]];
                result.push(triplet);

                // skip if 2nd value is a duplicate
                while (L < R && nums[L] === triplet[1]) {
                    L++;
                }

                // skip if 3rd value is a duplicate
                while (L < R && nums[R] === triplet[2]) {
                    R--;
                }
            }
        }

        // skip if 1st value is a duplicate
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
            i++;
        }
    }

    return result;
}
