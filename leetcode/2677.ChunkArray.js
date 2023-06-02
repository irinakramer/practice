// 2677. Chunk Array

// https://leetcode.com/problems/chunk-array

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  if (!arr.length) return [];

  const result = [];
  let start = 0;

  for (let i = 0; i < arr.length / size; i++) {
    result[i] = arr.slice(start, start + size);
    start += size;
  }

  return result;
};
