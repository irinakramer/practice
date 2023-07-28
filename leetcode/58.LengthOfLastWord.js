// 58. Length of Last Word
// Easy

// https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
  let words = s.split(' '); // split on empty str

  for (let i = words.length - 1; i >= 0; i--) {
    // if last word is not empty str, then return its length
    if (words[i] != '') {
      return words[i].length;
    }
  }
};

let s = '   fly me   to   the moon  ';
console.log(lengthOfLastWord(s)); // 4
