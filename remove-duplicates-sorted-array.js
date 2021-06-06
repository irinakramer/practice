
/*
LEETCODE - 26. Remove Duplicates from Sorted Array
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
*/

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    // keep track of unique element
    let u = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            nums[u] = nums[i + 1];
            u++;
        }
    }
    return u;
};

console.log(removeDuplicates(nums))