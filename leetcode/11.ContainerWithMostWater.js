// 11. Container With Most Water
// Medium

// https://leetcode.com/problems/container-with-most-water

/**
 * @param {number[]} height
 * @return {number}
 */

/* 
 [1,8,6,2,5,4,8,3,7]
   l
                 r
two pointers
while left < right
- left and right pointers
- area = (right - left) * min(arr[right], arr[left])
- keep track of max
- arr[left] < arr[right]
  - left++
- else
  - right --
- return max


brute force
- nested for loop
- width = (j - i)
- height = min(arr[i], arr[j])
- area = width * height
- max area = max(max, area)
- return max



Example 2:
Input: height = [1,1]
Output: 1

 0 1 2 3 4 5 6 7 8
[1,8,6,2,5,4,8,3,7]
   ^ ^
left = 1
right = 
max = 49
area = 2 * 5 = 15

*/

// Method 2 - two pionters
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1,
    max = 0;

  while (left < right) {
    const area =
      Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
