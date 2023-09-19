// 424. Longest Repeating Character Replacement
// Medium

// https://leetcode.com/problems/longest-repeating-character-replacement

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
/**
 * Method 1 - sliding window
 * Time O(((N + 26) * N) * (M - N)) | Space O(1)
 AABABBA
 L
 R

 count {}
 mostF = 
 maxL = 
 
 
  */
var characterReplacement = function (s, k) {
    let L = 0,
        res = 0;
    let count = {};

    for (let R = 0; R < s.length; R++) {
        let len = R - L + 1;
        count[s[R]] = 1 + (count[s[R]] || 0);

        if (len - Math.max(...Object.values(count)) > k) {
            count[s[L]] -= 1;
            L++;
        }

        len = R - L + 1;
        res = Math.max(res, len);
    }

    return res;
};

// TODD - better time complexity
