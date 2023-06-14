// 242. Valid Anagram

// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // if s and t not the same length return false
  if (s.length !== t.length) return false;

  // convert t to array
  const tArr = Array.from(t);

  // iterate over s to compare elements with tArr
  for (const char of s) {
    // if char from s is found in tArr:
    if (tArr.indexOf(char) !== -1) {
      // remove that char from tArr (tArr it becomes smaller)
      tArr.splice(tArr.indexOf(char), 1);
    } else {
      // else char from s is not found in tArr, return false
      return false;
    }
  }

  return true;
};
