// 219. Contains Duplicate II
// Easy

// https://leetcode.com/problems/contains-duplicate-ii

/**
 * Method 1 - Brute force - nested loops
 * Time O(n * k) or  O(n^2) | Space O(1)
 *
 */

/**
 0 1 2 3 4 5
 0,1,2,3,2,5
   i
         j
 
  */
var containsNearbyDuplicate = function (nums, k) {
    if (k == 0) return false;

    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        while (j - i <= k) {
            if (nums[i] == nums[j]) {
                return true;
            } else {
                j++;
            }
        }
    }

    return false;
};

/**
 * 
 * Method 2 - Sliding window and hash set
 * Time O(n) | Space O(n)

 0 1 2 3 4 5
 1,2,3,1. k=3
 L
       R

 {1,2,3}
  */

var containsNearbyDuplicate = function (nums, k) {
    if (k == 0) return false;

    let set = new Set();
    let L = 0;

    for (let R = 0; R < nums.length; R++) {
        if (set.has(nums[R])) {
            return true;
        }

        if (R - L + 1 > k) {
            set.delete(nums[L]);
            L++;
        }

        set.add(nums[R]);
    }

    return false;
};
