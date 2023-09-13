// 122. Best Time to Buy and Sell Stock II
// Medium

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii

/**
 * @param {number[]} prices
 * @return {number}
 */
// Two pointers
// Time O(n) | Space O(1)
var maxProfit = function (prices) {
    let max = 0;
    let left = 0,
        right = 1;

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            let diff = prices[right] - prices[left];
            max += diff;
        }
        left++;
        right++;
    }

    return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
