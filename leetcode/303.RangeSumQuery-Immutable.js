// 303. Range Sum Query - Immutable
// Easy

// https://leetcode.com/problems/range-sum-query-immutable

/**
 * @param {number[]} nums
 * Constructor - runs only once
 * Time O(n) | Space O(n)
 */
var NumArray = function (nums) {
    this.prefix = new Array();
    let total = 0;

    for (let el of nums) {
        total += el;
        this.prefix.push(total);
    }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * sumRange - runs many times
 * Time O(1) | Space O(1)
 */
NumArray.prototype.sumRange = function (left, right) {
    let rightPrefix = this.prefix[right];
    let leftPrefix = left <= 0 ? 0 : this.prefix[left - 1];

    return rightPrefix - leftPrefix;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
