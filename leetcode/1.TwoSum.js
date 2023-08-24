// 1. Two Sum
// Easy

// https://leetcode.com/problems/two-sum/description/

/* 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * Method 1 - using hash map
 * Time O(n) || Space O(n)
 * 
1,3,4,2     - 6
      ^
x = 6 - el 
x = 6 - 1 = 5
x = 6 - 3 = 3
x = 6 - 4 = 2 
x = 6 - 2 = 4 yes ==> [2, 3] // 2 is index of 4, and 3 is index of 2

{
1:0
3:1
4:2
}
*/

var twoSum = function (nums, target) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(target - nums[i])) {
            map.set(nums[i], i);
        } else {
            return [map.get(target - nums[i]), i];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [ 0, 1 ]
console.log(twoSum([1, 3, 4, 2], 6)); // [ 2, 3 ]
