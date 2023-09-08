// 209. Minimum Size Subarray Sum
// Medium

// https://leetcode.com/problems/minimum-size-subarray-sum/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Sliding window variable size
 * Time O(n) | Space O(n)
 
 0 1 2 3 4 5
 2,3,1,2,4,3
           L
             R
 total = 3
 length = 2
  */
var minSubArrayLen = function (target, nums) {
    let L = 0,
        total = 0,
        length = nums.length + 1; // init to larger number than nums.length

    // iterate over R pointer
    for (let R = 0; R < nums.length; R++) {
        total += nums[R]; // running total

        // when total is >= of target, start moving the window
        while (total >= target) {
            length = Math.min(length, R - L + 1); // running length
            total -= nums[L]; // decrease total before incrementing L
            L++;
        }
    }

    // if length didn't change (we didn't find the total that is
    // larger or equal to target) return zero, otherwise return length
    return length === nums.length + 1 ? 0 : length;
};
