//6. Zigzag Conversion
// Medium

// https://leetcode.com/problems/zigzag-conversion

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
/**
 based on solution 
 https://leetcode.com/problems/zigzag-conversion/solutions/3133966/easy-explanation-with-pics-and-video-java-c-python/?envType=study-plan-v2&envId=top-interview-150
  */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let answer = '';
  let n = s.length;
  let diff = 2 * (numRows - 1); // numRows * 2 - 2 (exclude corners)
  let diagonalDiff = diff;
  let secondIndex, index;

  for (let i = 0; i < numRows; i++) {
    index = i;

    while (index < n) {
      answer = answer.concat(s.charAt(index));
      if (i !== 0 && i !== numRows - 1) {
        diagonalDiff = diff - 2 * i; // 2 * numRows for diagonals
        secondIndex = index + diagonalDiff;

        if (secondIndex < n) {
          answer = answer.concat(s.charAt(secondIndex));
        }
      }
      index += diff;
    }
  }

  return answer;
};
