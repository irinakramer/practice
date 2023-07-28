const str = 'Data strtuctures and algorithms with Javasscript';
const arr = str.split(' ');

console.log(arr);

function reverse(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }

  return reversed;
}

console.log(reverse(arr));
