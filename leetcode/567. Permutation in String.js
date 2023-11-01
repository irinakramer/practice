// 567. Permutation in String
// Medium

// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

/**
Method 1 - Brute force with sorting substrings
Time O(n^2) | Space O(n)

hello ==> ehllo
ooolleoooleh
0123456789
l
    r
sub = oooll ==> llooo
s1 == sub ==> true
else ==> false
  */
var checkInclusion = function (s1, s2) {
    const ss1 = s1.split("").sort().join("");

    for (let L = 0, R = s1.length - 1; R < s2.length; L++, R++) {
        substr = s2
            .substring(L, R + 1)
            .split("")
            .sort()
            .join("");
        if (substr == ss1) return true;
    }

    return false;
};

console.log(checkInclusion("hello", "ooolleoooleh")); // false
console.log(checkInclusion("ab", "eidbaooo")); // true

// Method 2 - compare hasmaps
/**
ab
map1 = {
    a: 1
    b: 1
}
eidbaooo
01234567
   l
    r
map2 = {
    b: 1
    a: 1
}
build a map from l to r

compare two maps
if they're the same, return true

otherwise return false
  */
var checkInclusion = function (s1, s2) {
    const newMap = (s) => {
        let map = new Map();
        for (let i = 0; i < s.length; i++) {
            let el = s[i];

            if (!map.get(el)) {
                map.set(el, 1);
            } else {
                map.set(el, map.get(el) + 1);
            }
        }
        return map;
    };

    const compareMaps = (a, b) => {
        if (a.size !== b.size) return false;

        for (let [key, val] of a) {
            let bVal = b.get(key);
            if (bVal !== val || !b.has(key)) {
                return false;
            }
        }

        return true;
    };

    const map1 = newMap(s1);

    for (let l = 0, r = s1.length - 1; r < s2.length; l++, r++) {
        let sub = s2.substring(l, r + 1);
        const map2 = newMap(sub);

        if (compareMaps(map1, map2)) {
            return true;
        }
    }

    return false;
};
