// 128. Longest Consecutive Sequence
// Medium

// https://leetcode.com/problems/longest-consecutive-sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
  * Method 1 - sort array, hash(set), sliding window
 100,4,200,1,3,2
 sort array, assign L and R pointers
 1,2,3,4,100,200
         L   R
 {1, 2, 3, 4}
If nums are consecutive, keep adding them to hash
If not, clear hash and start over
keep track on max length of hash
 
 Time O(nlogn) b/c of sorting | Space O(n)
  */
var longestConsecutive = function (nums) {
    if (nums.length <= 1) return nums.length;

    nums = nums.sort((a, b) => a - b);
    let L = 0,
        R = 1,
        max = 1;
    let set = new Set();

    while (R < nums.length) {
        if (nums[R] === nums[L] + 1 || nums[R] === nums[L]) {
            set.add(nums[L]);
            set.add(nums[R]);
            max = Math.max(max, set.size);
        } else {
            set.clear();
        }
        L++;
        R++;
    }

    return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4 --> [1, 2, 3, 4]
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); //  --> [3, 4, 5, 6, 7, 8, 9]
