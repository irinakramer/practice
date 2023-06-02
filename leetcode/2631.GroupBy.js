// 2631. Group By

// https://leetcode.com/problems/group-by/

/**
 * @param {Function} fn
 * @return {Array}
 */

// Method 1
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);

    if (!result[key]) {
      result[key] = [this[i]];
    } else {
      let val = result[key];
      val.push(this[i]);
    }
  }

  return result;
};

// Method 2 - for ... of loop
Array.prototype.groupBy = function (fn) {
  const result = {};

  for (item of this) {
    let key = fn(item);

    if (!result[key]) {
      result[key] = [item];
    } else {
      result[key].push(item);
    }
  }

  return result;
};

// Method 3 - using reducer
Array.prototype.groupBy = function (fn) {
  return this.reduce((acc, curr) => {
    let key = fn(curr);

    if (!acc[key]) acc[key] = [curr];
    else acc[key].push(curr);

    return acc;
  }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
