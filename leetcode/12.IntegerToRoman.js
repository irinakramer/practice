// 12. Integer to Roman
// Medium

// https://leetcode.com/problems/integer-to-roman

/**
 * @param {number} num
 * @return {string}
 */
// const numerals = {1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'}

var intToRoman = function (num) {
  const s = num.toString();
  const len = s.length;

  let o = '',
    t = '',
    h = '',
    th = '';

  let ones = s.charAt(len - 1) || '',
    tens = s.charAt(len - 2) + '0' || '',
    hundreds = s.charAt(len - 3) + '00' || '',
    thousands = s.charAt(len - 4) + '000' || '';

  if (+ones < 4) {
    o = 'I'.repeat(+ones);
  } else if (+ones === 4) {
    o = 'IV';
  } else if (+ones === 9) {
    o = 'IX';
  } else {
    let x = +ones % 5;
    o = 'V'.concat('I'.repeat(x));
  }

  if (+tens < 40) {
    t = 'X'.repeat(+tens / 10);
  } else if (+tens === 40) {
    t = 'XL';
  } else if (+tens === 90) {
    t = 'XC';
  } else {
    let x = +tens % 50;
    t = 'L'.concat('X'.repeat(x / 10));
  }

  if (+hundreds < 400) {
    h = 'C'.repeat(+hundreds / 100);
  } else if (+hundreds === 400) {
    h = 'CD';
  } else if (+hundreds === 900) {
    h = 'CM';
  } else {
    let x = +hundreds % 500;
    h = 'D'.concat('C'.repeat(x / 100));
  }

  th = 'M'.repeat(+thousands / 1000);

  return th + h + t + o;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(60)); // LX
console.log(intToRoman(1994)); // MCMXCIV
