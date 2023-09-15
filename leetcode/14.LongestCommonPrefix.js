// 14. Longest Common Prefix

// https://leetcode.com/problems/longest-common-prefix

/**
 * @param {string[]} strs
 * @return {string}
 */

/**
Nested loop solution

 Time O(n * k) best, O(n^2) worst | Space O(n)
  */

var longestCommonPrefix = function (strs) {
    let longest = strs[0];

    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < longest.length; j++) {
            if (strs[i][j] !== longest[j]) {
                longest = longest.substring(0, j);
            }
        }
    }

    return longest;
};

/**
EXPLANATION:

strs = ["flower","flow","flight"]

longest = "flower" (first string in array)
iterate over strs

"flower","flow"
compare each char in longest and in next string
if a char is not the same, then truncate the string at this char:
longest = flow

"flow","flight"
conpare each char ....
longest = fl
 
return longest
*/
