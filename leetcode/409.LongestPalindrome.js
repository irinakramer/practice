// 409. Longest Palindrome

// https://leetcode.com/problems/longest-palindrome/

/**
 * @param {string} s
 * @return {number}
 */

// Method with Set
var longestPalindrome = function (s) {
  if (!s.length) return 0;
  if (s.length === 1) return 1;

  const set = new Set();
  let count = 0;

  // iterate over s
  for (const char of s) {
    // if char is already in the set,
    // then increment count by 2, remove char from set
    if (set.has(char)) {
      count += 2;
      set.delete(char);
    } else {
      // if char is not in set, add it
      set.add(char);
    }
  }

  // check if center char can be added
  // if set is not empty, add 1 to count
  const center = set.size ? 1 : 0;

  return (count += center);
};
