// 49. Group Anagrams
// Medium

// https://leetcode.com/problems/group-anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/* 
Time O(m * n) | Space O(m * n)
TODO - do better with time O
*/
var groupAnagrams = function (strs) {
    let res = {};

    for (let s of strs) {
        let count = new Array(26).fill(0);

        for (let char of s) {
            let key = char.charCodeAt(0) - 'a'.charCodeAt(0);
            count[key] += 1;
        }

        if (!res[count]) {
            res[count] = [s];
        } else {
            res[count].push(s);
        }
    }

    return Object.values(res);
};
