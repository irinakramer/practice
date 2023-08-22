// 242. Valid Anagram
// Easy

// https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Method 1 - for loop and splice
// time = O(n^2)
// space = O(n)
var isAnagram = function (s, t) {
    // if s and t not the same length return false
    if (s.length !== t.length) return false;

    // convert t to array
    const tArr = Array.from(t);

    // iterate over s to compare elements with tArr
    for (const char of s) {
        // if char from s is found in tArr:
        if (tArr.indexOf(char) !== -1) {
            // remove that char from tArr (tArr it becomes smaller)
            tArr.splice(tArr.indexOf(char), 1);
        } else {
            // else char from s is not found in tArr, return false
            return false;
        }
    }

    return true;
};

/**
  * Method 2 - hash 
  * Time O(n) | Space )(n)
  
 "anagram"
 "nagaram"
  {}
*/
var isAnagram = function (s, t) {
    // if s and t not the same length return false
    if (s.length !== t.length) return false;

    // store s into a hash
    let hash = {};
    for (let char of s) {
        if (!hash[char]) hash[char] = 1;
        else hash[char] += 1;
    }

    // itereate over t and delete chars if found from s hash
    for (let char of t) {
        if (!hash[char]) return false;

        if (hash[char] === 1) delete hash[char];
        else hash[char] -= 1;
    }

    // if hash is empty ==> true, else ==> false
    return Object.keys(hash).length === 0;
};

const s = 'anagram',
    t = 'nagaram';
console.log(isAnagram(s, t)); // true
