// 121. Best Time to Buy and Sell Stock

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock

/**
 * @param {number[]} prices [7,1,5,3,6,4]
 * @return {number}
 */

/*
Two pointers / Sliding window
Time O(n) | Space O(1)
*/

var maxProfit = function (prices) {
    let L = 0,
        R = 1,
        max = 0;

    while (R < prices.length) {
        if (prices[L] < prices[R]) {
            let profit = prices[R] - prices[L];
            max = Math.max(max, profit);
        } else {
            L = R;
        }
        R++;
    }

    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([7, 2, 5, 3, 1, 8, 4])); // 7
