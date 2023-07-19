const SCRIPTS = require('../scripts');

function filter(array, test) {
  let result = [];

  for (let element of array) {
    if (test(element)) {
      result.push(element);
    }
  }

  return result;
}

function isLiving(obj) {
  return obj.living;
}

// second param is a function to test by
console.log('Filter:');
console.group();
console.log(filter(SCRIPTS, isLiving));
console.log(filter(SCRIPTS, (el) => !el.living).length); // in-line function, length of array
console.groupEnd();
// ============== //

function map(array, transform) {
  let result = [];

  for (let element of array) {
    result.push(transform(element));
  }

  return result;
}

// filter Right to Left scripts
const rtlScripts = filter(
  SCRIPTS,
  (script) => script.direction === 'rtl'
);

console.log('Map:');
console.group();
console.log(map(rtlScripts, (script) => script.name));
console.groupEnd();
// ============== //

function reduce(array, combine, start) {
  let current = start;

  for (let element of array) {
    // combine is a function
    current = combine(current, element);
  }

  return current;
}

console.log('\nReduce:');
console.group();
console.log(reduce([1, 2, 3], (a, b) => a + b, 0));
// The standard array method .reduce:
console.log([1, 2, 3].reduce((a, b) => a + b));
// ============== //

// Find script with most characters
function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}

function mostCharacters(SCRIPTS) {
  return SCRIPTS.reduce((a, b) => {
    return characterCount(a) > characterCount(b) ? a : b;
  });
}

console.log(characterCount(SCRIPTS[0])); // 87
console.log(mostCharacters(SCRIPTS)); // {name: "Han", ...}
console.groupEnd();
// ============== //
