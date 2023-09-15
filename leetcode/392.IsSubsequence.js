// 392. Is Subsequence
// Easy

// https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 Time O(n) | Space O(1)
 
"ahbgdc"
      i
 
"abc"
    j

j = 3
  */
var isSubsequence = function (s, t) {
    let j = 0;

    for (let i = 0; i < t.length; i++) {
        if (t[i] == s[j]) {
            j++;
        }
    }

    return j == s.length;
};

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
