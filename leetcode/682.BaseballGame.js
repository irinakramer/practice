// 682. Baseball Game
// Easy

// https://leetcode.com/problems/baseball-game

/**
 * @param {string[]} operations
 * @return {number}
 */

/**
 i
 ["5","2","C","D","+"]
                   ^
 conditionals for "C","D","+"
 record []
 [5, 10, 15]
 push
 pop
 peek and peek-1


 sum = record.reduce(acc,curr => acc+curr)
 return sum
  */

// Time O(n) | Space O(n)
var calPoints = function (operations) {
    let record = [];

    for (let el of operations) {
        if (el === 'C') {
            record.pop();
        } else if (el === 'D') {
            // double the last one
            let result = record[record.length - 1] * 2;
            // push it into arr
            record.push(result);
        } else if (el === '+') {
            // sum of two last ones
            let result =
                record[record.length - 1] + record[record.length - 2];
            // add it into arr
            record.push(result);
        } else {
            record.push(+el);
        }
    }

    return record.reduce((acc, curr) => acc + curr, 0);
};

console.log(calPoints(['5', '2', 'C', 'D', '+'])); // 30
