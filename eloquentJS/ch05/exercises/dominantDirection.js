const SCRIPTS = require('../scripts');
const {
  characterScript,
  countBy,
} = require('../examples/recognizingText');

// https://eloquentjavascript.net/05_higher_order.html

// Dominant writing direction - Ex.4

function dominantDirection(text) {
  let scripts = countBy(text, (char) => {
    // script that has a range where the first char fits
    let script = characterScript(char.codePointAt(0));

    // if script exists return an obj with its direction or none
    return script ? script.direction : 'none';
  }).filter((script) => script.name !== 'none');

  // if no scripts exist return ltr by default
  if (scripts.length == 0) return 'ltr';

  // user reducer to choose script with most char count, return direction (aka .name)
  return scripts.reduce((a, b) => (a.count > b.count ? a : b)).name;
}

console.log(dominantDirection('???'));
// → ltr
console.log(dominantDirection('Hello!тяв'));
// → ltr
console.log(dominantDirection('Hey, مساء الخير'));
// → rtl
