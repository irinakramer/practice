// 238. Product of Array Except Self
// Medium

// https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
ans = answer array to store multiplied values, init to same length
 
first check for zeroes. If nums has more than one zero,
then all multiples will be zeros, and the returned array witll be [0, 0 ... 0]
iterate over nums to keep track or current element with i
inside each loop
do another loop to iterate over nums with j and take multiple of all elements
that are not equal to nums[i]
add the resulting multiple to answer array

return answer array
========

Time O(n^2)
Space O(n)
*/

var productExceptSelf = function (nums) {
    let zeros = [];
    const answer = new Array(nums.length);

    zeros = nums.filter((el) => el === 0);

    if (zeros.length > 1) {
        answer.fill(0);

        return answer;
    }

    for (let i = 0; i < nums.length; i++) {
        let result = 1;

        for (let j = 0; j < nums.length; j++) {
            if (j !== i) result *= nums[j];
        }

        answer[i] = result;
    }

    return answer;
};

const nums = [1, 2, 3, 4]; // [24,12,8,6]
//const nums = [-1,1,0,-3,3];   // [0,0,9,0,0]
console.log(productExceptSelf(nums));

/* 
Method 2
Sunny's solution from 7/31/23: 
Time O(n) | Space O(n)
*/

function productExceptItself(nums) {
    const res = [];

    const left = new Array(nums.length).fill(1);

    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }

    const right = new Array(nums.length).fill(1);

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        res.push(left[i] * right[i]);
    }

    return res;
}

/**
 * Method 3 - Prefix and Postfix in place of output array (Neetcode)
 * Time O(n) | Space O(1)
 *
 1 2 3 4
 -->
 prefix
 1 1 2 6

      <--
postfix
24 12 4 1

output
24 12 8 6
 
 */

var productExceptSelf = function (nums) {
    const res = new Array(nums.length).fill(1);

    prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix = prefix * nums[i];
    }

    postfix = 1;
    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] = res[j] * postfix;
        postfix = postfix * nums[j];
    }

    return res;
};
