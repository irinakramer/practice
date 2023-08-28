// 215. Kth Largest Element in an Array
// Medium

//https://leetcode.com/problems/kth-largest-element-in-an-array

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
  * METHOD 1  - QuickSort, then get Kth element
  * 
 3,2,1,5,6,4   k=2
 1,2,3,4,5,6  ==> 5
         ^
 3,2,3,1,2,4,5,5,6  k=4
 1,2,2,3,3,4,5,5,6  ==> 4
           ^
Time O(n^2) | Space O(n)
  */
var findKthLargest = function (nums, k) {
    function quickSort(arr, s, e) {
        if (e - s + 1 <= 1) return arr;

        let pivot = arr[e];
        let left = s;

        for (let i = s; i < e; i++) {
            if (arr[i] < pivot) {
                [arr[left], arr[i]] = [arr[i], arr[left]];
                left++;
            }
        }

        arr[e] = arr[left];
        arr[left] = pivot;

        quickSort(arr, s, left - 1);
        quickSort(arr, left + 1, e);

        return arr;
    }

    let sorted = quickSort(nums, 0, nums.length - 1);

    return sorted[nums.length - k];
};
