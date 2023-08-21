// 438. Find All Anagrams in a String
// Medium

const isDeepEqual = (object1, object2) => {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (var key of objKeys1) {
        const value1 = object1[key];
        const value2 = object2[key];

        const isObjects = isObject(value1) && isObject(value2);

        if (
            (isObjects && !isDeepEqual(value1, value2)) ||
            (!isObjects && value1 !== value2)
        ) {
            return false;
        }
    }
    return true;
};

const isObject = (object) => {
    return object != null && typeof object === 'object';
};

//const _ = require('lodash');
var findAnagrams = function (s, p) {
    const result = [];
    if (p.length > s.length) return [];
    const sCount = {};
    const pCount = {};
    for (let i = 0; i < p.length; i++) {
        sCount[s[i]] = sCount[s[i]] ? sCount[s[i]] + 1 : 1;
        pCount[p[i]] = pCount[p[i]] ? pCount[p[i]] + 1 : 1;
    }
    if (isDeepEqual(sCount, pCount)) result.push(0);
    // s = "cbacbabacd"
    //       l
    //          r
    // p = "abc"
    // pCount = {
    //   a: 1, b: 1, c: 1
    // }
    // sCount = {
    //   b: 1, a: 1, c: 1
    // }
    let left = 0;
    let right = p.length;
    while (right < s.length) {
        sCount[s[left]]--;
        sCount[s[right]] =
            sCount[s[right]] !== undefined ? sCount[s[right]] + 1 : 1;
        if (sCount[s[left]] === 0) delete sCount[s[left]];
        if (sCount[s[right]] === 0) delete sCount[s[right]];

        // console.log(sCount, pCount)
        if (isDeepEqual(sCount, pCount)) result.push(left + 1);
        left++;
        right++;
    }
    return result;
};

/*
pCount = {
  a: 1, b: 1, c: 1
} 
sCount = {
  c: 0, b: 1, a: 1
}
*/

// function isEqual(obj1, obj2){
//   let arr1 = Object.entries(obj1).sort()

// }

console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagrams('abab', 'ab')); // [0, 1, 2]

// TODO - optimize with better performance
