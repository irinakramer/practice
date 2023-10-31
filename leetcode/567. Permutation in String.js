// 567. Permutation in String
// Medium

// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/**
Method 1 - Brute force with sorting substrings
Time O(n^2) | Space O(n)

hello ==> ehllo
ooolleoooleh
0123456789
l
    r
sub = oooll ==> llooo
s1 == sub ==> true
else ==> false
  */
var checkInclusion = function (s1, s2) {
    const ss1 = s1.split("").sort().join("");

    for (let L = 0, R = s1.length - 1; R < s2.length; L++, R++) {
        substr = s2
            .substring(L, R + 1)
            .split("")
            .sort()
            .join("");
        if (substr == ss1) return true;
    }

    return false;
};
