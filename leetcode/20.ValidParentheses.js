// 20. Valid Parentheses

// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */

/**
METHOD 1
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

/**
METHOD 2 - better performance
 Idea to push opening brackets into stack, then pop them if matching
 closing is found.

Iterate over string
if char is closing and stack is not empty
and if top of stack matches closing char, we pop it from stack
if it's not matching, means it's not there we return false
if it's an opening char and we add to stack
  */

// Time O(n) | Space O(n)
var isValid = function (s) {
    const stack = [];
    const charMap = { ')': '(', ']': '[', '}': '{' };

    for (let char of s) {
        if (char in charMap && stack.length) {
            if (charMap[char] === stack[stack.length - 1])
                stack.pop();
            else return false;
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};
