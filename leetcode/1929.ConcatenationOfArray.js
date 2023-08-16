// 1929. Concatenation of Array
// Easy

// https://leetcode.com/problems/concatenation-of-array

// Method 1 - JS concat method
var getConcatenation = function (nums) {
    return nums.concat(nums);
};

// Method 2 - nested loop, but more extensible
var getConcatenation = function (nums) {
    let ans = [];
    for (let k = 0; k < 2; k++) {
        for (let i = 0; i < nums.length; i++) {
            ans.push(nums[i]);
        }
    }

    return ans;
};
