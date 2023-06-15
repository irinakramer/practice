// 169. Majority Element

//https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
// Hashmap method
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
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
};
