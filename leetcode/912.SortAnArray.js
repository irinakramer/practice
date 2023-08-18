// 912. Sort an Array
// Medium

// https://leetcode.com/problems/sort-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
Method 1 - Insertion sort
Time O(n^2) | Space O(1)


[2,3,4,1,6]
 j i
   j i
     j i  ==> swap 4 and 1
[2,3,1,4,6]   
   j   i   ==> swap 3 and 1  
[2,1,3,4,6] 
 j     i   ==> swap 2 and 1
[1,2,3,4,6] 
       j i ==> sorted
*/

var sortArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;

        while (j >= 0 && nums[j] > nums[j + 1]) {
            // swap
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            j--;
        }
    }
    return nums;
};

console.log(sortArray([5, 2, 3, 1])); // [ 1, 2, 3, 5 ]

// TODO - solve with O(nlog(n))
