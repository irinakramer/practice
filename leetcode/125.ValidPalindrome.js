// 125. Valid Palindrome

// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */

/**
Method 1 - Two pointers opposite ends
 Recreate new str by removing all non-alphanum char from s
 using for loop over s, arr and converting to str
 Then two pointers from opposite ends compare each char.

 Time O(n) | Space O(n)
  */
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

// Method 1 variation - recreate str with alphanumeic characters
var isPalindrome = function (s) {
    if (!s.length) return false;

    // rebuild str
    const alpha = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const arr = [];

    for (let char of s) {
        if (alpha.indexOf(char.toLowerCase()) == -1) continue;

        arr.push(char.toLowerCase());
    }
    const str = arr.join('');

    // two pointers
    let left = 0,
        right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

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
