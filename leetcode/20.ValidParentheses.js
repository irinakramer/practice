// 20. Valid Parentheses

// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

/**
 Input: s = "([]){}"
 ([]){}
 o  c
([)] --> TODO this case
o c
  */

var isValid = function (s) {
  const end = s.length - 1;
  let open = 0;
  let close = 1;
  let farClose = 1;
  let counter = 0;

  // it doesn't start with opening parent and doesn't end with closing parent
  if (s[0] == ')' || s[0] == ']' || s[0] == '}') return false;
  if (s[end] == '(' || s[end] == '[' || s[end] == '{') return false;

  function check(o, c) {
    while (o < c) {
      if (
        (o === '(' && c === ')') ||
        (o === '[' && c === ']') ||
        (o === '{' && c === '}')
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  while (close < s.length) {
    if (check(s[open], s[close])) {
      counter += 2;
      farClose = close;
    } else {
      close++;
    }
    open = farClose + 1;
    close = open + 1;
  }

  return counter === s.length;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
