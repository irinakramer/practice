const SCRIPTS = require('../scripts');

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }

  return null;
}

console.log(characterScript(1210));
// {name: 'Cyrillic', ...}
// ======================= //

function countBy(items, groupName) {
  let counts = [];

  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex((c) => c.name == name);

    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

console.group();
console.log('\ncountBy:');
console.log(countBy([1, 2, 3, 4, 5], (n) => n > 4));
// [ { name: false, count: 4 }, { name: true, count: 1 } ]
console.groupEnd();
// ======================= //

/* 
Function that tells us which scripts are used in a piece of text.
*/
function textScripts(text) {
  let scripts = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));

    return script ? script.name : 'none';
  }).filter((script) => script.name !== 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total == 0) return 'No scripts found';

  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
}

console.group();
console.log('\ntextScripts:');
console.log(textScripts('英国的狗说"woof"'));
console.groupEnd();
