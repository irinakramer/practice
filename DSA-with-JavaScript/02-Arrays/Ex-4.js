const letters = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];

function makeWord(arr) {
  let str = '';

  for (let i = 0; i < arr.length; i++) {
    str = str.concat(arr[i]);
  }

  return str;
}

console.log(makeWord(letters)); // javascript

// Method 2
function makeWord2(arr) {
  return arr.join('');
}
console.log(makeWord2(letters)); // javascript
