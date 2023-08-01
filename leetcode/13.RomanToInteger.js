// 13. Roman to Integer
// Easy

// https://leetcode.com/problems/roman-to-integer

/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function (s) {
  const letters = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let i = 1;
  let year = 0;

  while (i <= s.length) {
    let pair = s[i - 1] + s[i];

    if (letters[pair]) {
      year += letters[pair];
      i += 2;
    } else {
      year += letters[s[i - 1]];
      i++;
    }
  }

  return year;
};
