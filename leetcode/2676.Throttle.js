// 2676. Throttle
// https://leetcode.com/problems/throttle

/* 
Given a function fn and a time in milliseconds t, 
return a throttled version of that function.

A throttled function is first called without delay and then, 
for a time interval of t milliseconds, can't be executed 
but should store the latest function arguments provided 
to call fn with them after the end of the delay.
*/


// TODO

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    return function(...args) {
  
    }
  };
  
  /**
   * const throttled = throttle(console.log, 100);
   * throttled("log"); // logged immediately.
   * throttled("log"); // logged at t=100ms.
   */