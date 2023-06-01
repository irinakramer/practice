// 2619. Array Prototype Last

// https://leetcode.com/problems/array-prototype-last

Array.prototype.last = function() {
    if (!this.length) return -1

    return this.pop()
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
