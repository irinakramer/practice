// 3. Longest Substring Without Repeating Characters
// Medium

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

// Orig solution
var lengthOfLongestSubstring = function (s) {
    // Create longest Map to keep track of unique chars and their indices
    let longest = new Map();
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        if (!longest.has(s[i])) {
            // If char is not in longest, then add it
            longest.set(s[i], i);
        } else {
            /**
    If char is in longest, delete it and all chars before it.
    To do so:
    1 - convert longest to array
    2 - filter out elements with index greater than current char
    3 - convert filtered arr back to longest Map
     */

            const arr = Array.from(longest);
            const filtered = arr.filter((el) => {
                return el[1] >= longest.get(s[i]);
            });

            longest = new Map(filtered);

            // Then add back current char
            longest.set(s[i], i);
        }
        // Check if longest size is greater than max
        if (longest.size > max) max = longest.size;
    }

    return max;
};

// sunny's solution
function lengthOfLongestSubstring(str) {
    if (str.length === 0 || str.length === 1) return str.length;
    const set = new Set(str[0]);
    let start = 0;
    let end = 1;
    let max = 1;
    while (end < str.length) {
        if (!set.has(str[end])) {
            set.add(str[end]);
            max = Math.max(max, end - start + 1);
        } else {
            while (str[start] !== str[end]) {
                set.delete(str[start]);
                start++;
            }
            start++;
        }
        end++;
    }

    return max;
}

console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('bbbbb')); // 1

/**
 * @param {string} s
 * @return {number}
 */
/**

 Method 3 - Sliding window and a set
 Time O(n) | Space O(n)
 abcabcbb
  L
    R 
 set {b,c,a} etc...
 max = 3
  */
function lengthOfLongestSubstring(str) {
    const set = new Set();
    let L = 0,
        max = 0;

    for (let R = 0; R < str.length; R++) {
        while (set.has(str[R])) {
            // Remove str[L] which was originally str[R]
            // keep moving L while R is still there
            set.delete(str[L]);
            L++;
        }
        // if str[R] not in set, add it
        set.add(str[R]);
        max = Math.max(R - L + 1, max);
    }

    return max;
}
