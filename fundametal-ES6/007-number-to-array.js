/**
 * 7. Write a JavaScript program to converts a specified number to an array of digits.
 */

let num = 1234093485;

const convertToArray = (num) => {
    const arr = num.toString().split('');
    return arr.map(n => parseInt(n))
}

console.log(convertToArray(num));

// Method 2 - w3resource
const digitize = num => [...`${num}`].map(n => parseInt(n));

console.log(digitize(num));