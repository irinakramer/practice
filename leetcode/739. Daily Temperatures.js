// 739. Daily Temperatures
// Medium

// https://leetcode.com/problems/daily-temperatures

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/**
73,74,75,71,69,72,76,73
      c
                  n
n > c
n < c
count0 = 1,2,3,4
count0 = 1, 2
1, 1, 0, 0, 0,  
  */
// Method 1 - two pointers
// Solved basic cases with this approach
var dailyTemperatures = function (temperatures) {
    let answer = new Array(temperatures.length).fill(0);
    let c = 0,
        n = 1;
    let count = 0;

    while (c < temperatures.length && n < temperatures.length) {
        if (temperatures[n] > temperatures[c]) {
            // add 1 and count to answer
            answer[c] = count + 1;
            // set count to 0
            count = 0;
            c++;
            n = c + 1;
        } else {
            // add 1 to count
            count++;
            n++;
        }
    }

    return answer;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [ 1, 1, 1, 0 ]
