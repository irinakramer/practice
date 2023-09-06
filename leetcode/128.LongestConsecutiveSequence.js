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

/**
  * Method 2 - check sequential numbers in hash set
 100,4,200,1,3,2
 100,4,200,1,3,2 - set
number line:
 1,2,3,4,  100,  200

 count only numbers that are beginner of sequences. if number does not
 have a previous one, then we continue
 When beginner is found, we start counting the numbers that are
 number + 1j
 we check longest each time

 
 Time O(n) | Space O(n)
  */

var longestConsecutive = function (nums) {
    const set = new Set(nums);
    let longest = 0;

    // iterate over nums
    for (let n of nums) {
        // check if n is the beginning of sequence
        if (!set.has(n - 1)) {
            let length = 0; // start counting length of sequence
            // check if set has n+0, n+1, n+2...
            // while incrementing length
            while (set.has(n + length)) {
                length += 1;
                longest = Math.max(longest, length); // record longest
            }
        }
    }

    return longest;
};
