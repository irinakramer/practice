// 88. Merge Sorted Array
//https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// Method 1 - concat both, then sort
var merge = function (nums1, m, nums2, n) {
    for (let i = 0; i < n; i++) {
        nums1[m + i] = nums2[i];
    }

    nums1.sort((a, b) => a - b);
};

// Solution 2 - Two pointers and iterate from the end of arrays
// Time: O(m+n)
// Space: 0(1)
let i = m - 1;
let j = n - 1;
let k = m + n - 1;

while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
        nums1[k] = nums1[i];
        k--;
        i--;
    } else {
        nums1[k] = nums2[j];
        k--;
        j--;
    }
}
