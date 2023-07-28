// 28. Find the Index of the First Occurrence in a String
// Easy

var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};

const haystack = 'sadbutsad',
  needle = 'sad';
console.log(strStr(haystack, needle)); // 0
