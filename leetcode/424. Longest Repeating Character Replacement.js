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

// Method 2 - same but using maxF  - better time complexity
var characterReplacement = function (s, k) {
    let L = 0,
        res = 0,
        maxF = 0;
    let count = {}; // occurences of each char (A-Z)

    // move thru str by R pointer
    for (let R = 0; R < s.length; R++) {
        // increment char of R in the count hashmap
        count[s[R]] = 1 + (count[s[R]] || 0);
        maxF = Math.max(maxF, count[s[R]]); // keep track of max frequency

        // if window is invalid, decrement L and move it by 1
        // invalid window is when number of allowed chars is more than k
        // R - L + 1 is the length of the current window
        if (R - L + 1 - maxF > k) {
            count[s[L]] -= 1;
            L++;
        }

        // take max of res or length of curr window
        res = Math.max(res, R - L + 1);
    }

    return res;
};
