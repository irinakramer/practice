const { List } = require('./ListClass');

const myList = new List();
myList.append(1);
myList.append(2);
console.log(myList.insertSmaller(0)); // true

console.log(myList); // List { listSize: 3, pos: 0, dataStore: [ 0, 1, 2 ] }
console.log(myList.insertSmaller(3)); // false
