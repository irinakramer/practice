// 5. Longest Palindromic Substring
// Medium

// https://leetcode.com/problems/longest-palindromic-substring/

/* 
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/

var longestPalindrome = function (s) {
  // helper function to check if a string is a palindrome
  function check(i, j) {
    let left = i,
      right = j - 1;
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }

  /*   
  iterate over length - outer loop
  iterate over start & s.length minus length - inner loop
  with each outer loop iteration we decrease the length by 1
  with each inner loop itereation we check all substrings of that length
  it returns the longest substring because we're going from longest to shortest length 
  */

  for (let length = s.length; length > 0; length--) {
    for (let start = 0; start <= s.length - length; start++) {
      if (check(start, start + length))
        return s.substring(start, start + length);
    }
  }
};

console.log(longestPalindrome('babad')); // bab
console.log(longestPalindrome('cbbd')); // bb
