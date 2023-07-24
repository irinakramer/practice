// 57. Insert Interval

/* 
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

compare curr with new
if curr[1] < new[0] push curr to left
if curr[0] > new[1] push curr to right
else new = [Math.min(curr[0], new[0]), Math.max(curr[1], new[1])]

result concat left, new, right
*/

var insert = function (intervals, newInterval) {
  const left = [],
    right = [];

  for (let curr of intervals) {
    if (curr[1] < newInterval[0]) left.push(curr);
    else if (curr[0] > newInterval[1]) right.push(curr);
    else {
      newInterval = [
        Math.min(curr[0], newInterval[0]),
        Math.max(curr[1], newInterval[1]),
      ];
    }
  }

  return left.concat([newInterval]).concat(right);
};

const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];
console.log(insert(intervals, newInterval)); // [[1, 5], [6, 9]]
