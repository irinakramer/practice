// 912. Sort an Array
// Medium

// https://leetcode.com/problems/sort-an-array

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/* 
Method 1 - Insertion sort
Time O(n^2) | Space O(1)


[2,3,4,1,6]
 j i
   j i
     j i  ==> swap 4 and 1
[2,3,1,4,6]   
   j   i   ==> swap 3 and 1  
[2,1,3,4,6] 
 j     i   ==> swap 2 and 1
[1,2,3,4,6] 
       j i ==> sorted
*/

var sortArray = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1;

        while (j >= 0 && nums[j] > nums[j + 1]) {
            // swap
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            j--;
        }
    }
    return nums;
};

console.log(sortArray([5, 2, 3, 1])); // [ 1, 2, 3, 5 ]

// Method 2 - Merge sort
// Time O(nlog(n)) | Space (O(n))
var sortArray = function (nums) {
    function merge(arr, l, m, r) {
        // Find lengths of two subarrays to be merged
        let length1 = m - l + 1;
        let length2 = r - m;

        // Create temp subarrays
        let left = new Array(length1);
        let right = new Array(length2);

        // Copy the sorted left & right halfs to temp arrays
        for (let i = 0; i < length1; i++) {
            left[i] = arr[l + i];
        }

        for (let j = 0; j < length2; j++) {
            right[j] = arr[m + 1 + j];
        }

        // initial indexes of left and right sub-arrays
        let i = 0; // index for left
        let j = 0; // index for right
        let k = l; // Initial index of merged subarray array

        // Merge the two sorted halfs into the original array
        while (i < length1 && j < length2) {
            if (left[i] <= right[j]) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
        }

        // One of the halfs will have elements remaining
        while (i < length1) {
            arr[k] = left[i];
            i++;
            k++;
        }
        while (j < length2) {
            arr[k] = right[j];
            j++;
            k++;
        }
    }

    function mergeSort(arr, l, r) {
        if (l == r) return arr;
        // divide in 2
        let m = Math.floor((l + r) / 2);

        // mergesort 1
        mergeSort(arr, l, m);
        // mergesort 2
        mergeSort(arr, m + 1, r);
        // merge 1 and 2
        merge(arr, l, m, r);
        return arr;
    }

    return mergeSort(nums, 0, nums.length - 1);
};

console.log(sortArray([5, 1, 1, 2, 0, 0])); // [ 0, 0, 1, 1, 2, 5 ]
