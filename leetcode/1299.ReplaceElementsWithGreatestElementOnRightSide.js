//  1299. Replace Elements with Greatest Element on Right Side
// Easy

// https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side

/**
 * @param {number[]} arr
 * @return {number[]}
 */
/**
  * Two pointers solution (i and i-1)
  * Time O(n) | Space O(n)
  * 

 [17, 18, 5, 4, 6, 1]
      i
  i-1
 
 max = 18
 [18,6,6,6,1,-1]
  */
var replaceElements = function (arr) {
    let res = new Array(arr.length);
    let max = 0;
    res[arr.length - 1] = -1;

    for (let i = arr.length - 1; i > 0; i--) {
        max = Math.max(arr[i], max);
        res[i - 1] = max;
    }

    return res;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [ 18, 6, 6, 6, 1, -1 ]
