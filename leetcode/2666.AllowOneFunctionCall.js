// 2666. Allow One Function Call
// https://leetcode.com/problems/allow-one-function-call/
/* 
Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.

*/

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // using closure, create a flag, set to false
    let calledOnce = false;
    
    return function(...args){
        // only return if flag is false
        if (!calledOnce) {
            calledOnce = true; // set flat to true
            const result = fn(...args);
            
            return result;
        }    
    }
};


let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn
