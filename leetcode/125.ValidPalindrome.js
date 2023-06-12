// 125. Valid Palindrome

// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
// Method 1 - Two pointers opposite ends
var isPalindrome = function (s) {
  if (!s.length) return false;

  s = s.replace(/[\W_]+/g, '').toLowerCase();

  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};

// Method 2 - Recursive
function isPalindrome(str) {
  if (str.length === 0) return;

  if (str.charAt(0) != str.charAt(str.length - 1)) return false;

  isPalindrome(str.slice(1, -1));

  return true;
}

let s = 'A man, a plan, a canal: Panama';
isPalindrome(s);
