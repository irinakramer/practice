// 20. Valid Parentheses

// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

/**
Create stack
iteraate over s, if open brace matches (, [, { 
    add a corresponding closing bracket to the stack
if we encounter a closing bracket we pop the top from the stack and 
compare it to char
if they dont' match we return false
  */

var isValid = function (s) {
  // if odd number
  if (s.length % 2 !== 0) return false;

  let stack = [];

  for (let char of s) {
    if (char === '(') {
      stack.push(')');
    } else if (char === '[') {
      stack.push(']');
    } else if (char === '{') {
      stack.push('}');
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
