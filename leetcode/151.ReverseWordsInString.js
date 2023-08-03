// 151. Reverse Words in a String
// Medium

// https://leetcode.com/problems/reverse-words-in-a-string

/**
 * @param {string} s
 * @return {string}
 */
/**
 "the sky is blue"
 [the, sky, is, blue] remove spaces
 i                  j
 swap 
 [blue, sky, is, the]
        i    j
        swap
[blue, i, sky, the]
join(' ')
  */

var reverseWords = function (s) {
  const arr = s.split(' ');

  const trimmed = arr.filter((el) => el != '');

  let i = 0,
    j = trimmed.length - 1;

  while (i < j) {
    [trimmed[i], trimmed[j]] = [trimmed[j], trimmed[i]];
    i++;
    j--;
  }

  return trimmed.join(' ');
};

console.log(reverseWords('the sky is blue')); // "blue is sky the"
console.log(reverseWords('  hello world  ')); // "world hello"
console.log(reverseWords('a good   example')); // "example good a"
