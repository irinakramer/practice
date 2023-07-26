// 3. Longest Substring Without Repeating Characters
// Medium

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
/* 

  */

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
