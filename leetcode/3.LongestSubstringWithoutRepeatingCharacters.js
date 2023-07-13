// 3. Longest Substring Without Repeating Characters
// Medium

// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */

/**
 * Create a Map to keep track of unique chars and their indices
 * Create max to record the size the Map
 * Iterate over string
 * If char is not in Map, then add it
 * If char is in Map, delete it and all chars before it.
      To do so:
      1 - convert Map to array
      2 - filter out elements with index greater than current char
      3 - convert filtered arr back to Map
 * Then add the current char to Map, it will have a different index
 * Check if Map size is greater than max and if so, reassign max
 * Return max
 */

var lengthOfLongestSubstring = function (s) {
  let longest = new Map();
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (!longest.has(s[i])) {
      longest.set(s[i], i);
    } else {
      const arr = Array.from(longest);
      const filtered = arr.filter((el) => el[1] >= longest.get(s[i]));

      longest = new Map(filtered);

      longest.set(s[i], i);
    }
    if (longest.size > max) max = longest.size;
  }

  return max;
};

// ================= //
const s = 'abcabcbb';
// const s = "bbbbb"
// const s = "pwwkew"

console.log(lengthOfLongestSubstring(s));
