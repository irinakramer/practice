// https://leetcode.com/problems/counter-ii
// 2665. Counter II

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

var createCounter = function(init) {
    let current = init;

    return {
        increment: function() {
            current += 1
            return current
        },
        decrement: function () {
            current -= 1
            return current
        },
        reset: function () {
            current = init
            return init
        }
    }
    
};


const counter = createCounter(5)
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4



/* 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/
