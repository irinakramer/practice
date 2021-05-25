// HackerRank - 2D Array - DS https://www.hackerrank.com/challenges/2d-array/problem

/* An hourglass in arr is a subset of values with indices falling in this pattern in 's graphical representation:
a b c
  d
e f g

There are 16 hourglasses in arr. An hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr , 
then print the maximum hourglass sum. The array will always be 6x6.
*/
const arr = 
[
    [-9, -9, -9,  1, 1, 1],
    [0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [0,  0,  8,  6, 6, 0],
    [0,  0,  0, -2, 0, 0],
    [0,  0,  1,  2, 4, 0]
]


function hourglassSum(arr) {
    let arr2 = [];
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            let x = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] +arr[i+2][j+1] +arr[i+2][j+2];
            arr2.push(x);
        }
    }
    return Math.max(...arr2);
}
console.log(hourglassSum(arr)); // 28