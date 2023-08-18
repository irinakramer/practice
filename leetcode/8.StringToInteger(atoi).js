// 8. String to Integer (atoi)
// Medium

// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */

/**
 https://leetcode.com/problems/string-to-integer-atoi/solutions/4671/javascript-seriously-code/
  */
var myAtoi = function (s) {
    return Math.max(
        Math.min(parseInt(s) || 0, 2147483647),
        -2147483648
    );
};

// TODO - implement from scratch: https://leetcode.com/problems/string-to-integer-atoi/solutions/162293/javascript-99-proper-clean-solution/
