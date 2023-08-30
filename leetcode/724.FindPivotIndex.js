// 724. Find Pivot Index
// Easy

// https://leetcode.com/problems/find-pivot-index

/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Method 1 - prefix sum and suffix sum arrays
 * then find common element - this will be the pivot
 *
 * Time O(n) | Space O(n)
 */
var pivotIndex = function (nums) {
    const prefix = new Array(nums.length).fill(null);
    const suffix = new Array(nums.length).fill(null);
    let totalPre = 0;
    let totalSuf = 0;

    for (let i = 0; i < nums.length; i++) {
        totalPre += nums[i];
        prefix[i] = totalPre;
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        totalSuf += nums[j];
        suffix[j] = totalSuf;
    }

    for (let k = 0; k < prefix.length; k++) {
        if (prefix[k] === suffix[k]) {
            return k;
        }
    }

    return -1;
};

/**
 * Method 2 - Compare with Total
 * Calculate total first, then calculate leftSum and rightSum, and compare them
 *
 * Time O(n) | Space O(1)
 */

var pivotIndex = function (nums) {
    let total = 0;
    let leftSum = 0;

    for (let el of nums) {
        total += el;
    }

    for (let i = 0; i < nums.length; i++) {
        let rightSum = total - nums[i] - leftSum;

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
};
