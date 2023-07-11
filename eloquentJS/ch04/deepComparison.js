// https://eloquentjavascript.net/04_data.html

// Deep comparison

function deepEqual(a, b) {
  if (
    typeof a === 'object' &&
    a !== null &&
    typeof b == 'object' &&
    b !== null
  ) {
    const propsA = Object.keys(a);
    const propsB = Object.keys(b);

    if (propsA.length !== propsB.length) return false;

    for (let i = 0; i < propsA.length; i++) {
      if (propsA[i] !== propsB[i]) return false;
      else {
        return deepEqual(a[propsA[i]], b[propsB[i]]);
      }
    }
  } else {
    if (a === b) return true;
    else return false;
  }
}

let obj = { here: { is: 'an' }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
