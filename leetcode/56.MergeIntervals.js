// 56. Merge Intervals
// Medium

// https://leetcode.com/problems/merge-intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/*

  */

var merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let result = [intervals[0]];

  for (let curr of intervals) {
    let last = result[result.length - 1];

    if (last[1] >= curr[0]) {
      let merged = [
        Math.min(last[0], curr[0]),
        Math.max(last[1], curr[1]),
      ];
      result.pop();
      result.push(merged);
    } else {
      result.push(curr);
    }
  }

  return result;
};

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(merge(intervals)); // [[1, 6], [8, 10], [15, 18]]
