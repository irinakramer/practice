// 80. Remove Duplicates from Sorted Array II
// Medium

// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1 - Solution with Map, O(n) time, O(n) space
var removeDuplicates = function (nums) {
    let map = new Map();
    let temp = [];

    let i = 0;
    while (i < nums.length) {
        if (!map.has(nums[i])) {
            map.set(nums[i], 1);
            temp.push(nums[i]);
            i++;
        } else if (map.get(nums[i]) === 1) {
            map.set(nums[i], 2);
            temp.push(nums[i]);
            i++;
        } else {
            i++;
        }
    }

    nums.splice(temp.length);

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }
};

// Method 2 - Modifying array in place, O(n) time, O(1) space
/**
 1,1,1,2,2,3
 c n => c=2
   c n ==> remove n, n = 2

 1,1,2,2,3  
   c n c=1 move
     c n ==> c=2
       c n c=1 move ==> loop ended

answer:
1,1,2,2,3        
  */

var removeDuplicates = function (nums) {
    let count = 1;
    let curr = 0;
    let next = 1;

    while (next < nums.length) {
        if (nums[curr] === nums[next]) {
            if (count < 2) {
                count++;
                curr++;
                next++;
            } else {
                nums.splice(next, 1);
                next = curr + 1;
            }
        } else {
            count = 1;
            curr++;
            next++;
        }
    }
};

/**
 * Method 3 - 
 Based on solution from https://www.youtube.com/watch?v=drbtmYjZQHQ
 Compare Left - 2 to current element, and if they're not the same, 
 replace Left with current element, increment Left and move to next
 element
 Return Left index

 Time O(n) | Space O(1)

 0 1 2 3 4 5
 1,1,1,2,2,3
     L
       el

 1,1,2,2,2,3
       L
         el
 
 1,1,2,2,3,3
         L
           el
 
 1,1,2,2,3,3
           L
             el == out
  */

var removeDuplicates = function (nums) {
    let L = 0,
        R = 0;

    for (let el of nums) {
        if (L === 0 || L === 1 || nums[L - 2] != el) {
            nums[L] = el;
            L++;
        }
    }

    return L;
};
