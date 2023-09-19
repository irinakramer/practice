// 169. Majority Element
// Easy

//https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Method 1 - Hashmap method, keys, reduce
// Time O(2n), but many unnecessary operations | Space O(n)
var majorityElement = function (nums) {
    // create empty obj to store n and its occurencies
    const obj = {};

    // iterate over nums
    for (const n of nums) {
        // if obj has a prop with n,
        // then increment the value by 1
        if (Object.hasOwn(obj, n.toString())) {
            obj[n] = obj[n] + 1;
        } else {
            // if not then create a new prop n and assign 1 for value
            obj[n] = 1;
        }
    }

    // find the key with the largest value
    return Object.keys(obj).reduce((a, b) =>
        obj[a] > obj[b] ? a : b
    );
};

// Method 2 - hashmap
// Time O(n) | Space O(n)
var majorityElement = function (nums) {
    if (nums.length == 1) return nums[0];

    const map = new Map();
    let max = 1;
    let majority = null;

    for (let el of nums) {
        let count = map.get(el);

        if (!map.has(el)) {
            map.set(el, 1);
        } else {
            map.set(el, count + 1);
        }

        if (count >= max) {
            max = count;
            majority = el;
        }
    }

    return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2

// TODO - Space O(1)
