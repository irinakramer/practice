// 1346. Check If N and Its Double Exist
// https://leetcode.com/problems/check-if-n-and-its-double-exist/

/**
 * @param {number[]} arr
 * @return {boolean}
 */

// O(N) Solution
// TODO - optimize more
var checkIfExist = function (arr) {
  if (arr.length === 0 || arr === null) {
    return false;
  }

  const set = new Set();

  for (let i = 0; i < arr.length; i++) {
    const double = 2 * arr[i];
    const half = arr[i] % 2 == 0 && arr[i] / 2;

    if (set.has(double) || set.has(half)) {
      return true;
    } else {
      set.add(arr[i]);
    }
  }

  return false;
};

// O(N^2) Solution
// var checkIfExist = function(arr) {
//     if (arr.length === 0 || arr === null) {
//         return false
//     }

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (j === i) {
//                 continue
//             }

//             if (arr[i] === 2 * arr[j]) {
//                 return true
//             }
//         }
//     }

//     return false
// };
