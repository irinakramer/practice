// 167. Two Sum II - Input Array Is Sorted
// Medium

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 Two pointers solution (shrinking window)
 Time O(n) | Space O(1)
 
  */
var twoSum = function (numbers, target) {
    let L = 0,
        R = numbers.length - 1;

    while (L < R) {
        if (numbers[L] + numbers[R] > target) {
            R--;
        } else if (numbers[L] + numbers[R] < target) {
            L++;
        } else {
            return [L + 1, R + 1];
        }
    }

    return null;
};

console.log(twoSum([2, 7, 11, 15], 9)); // [ 1, 2 ]
console.log(twoSum([2, 3, 4], 6)); // [ 1, 3 ]
