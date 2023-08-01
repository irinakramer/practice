const { List } = require('./ListClass');

const myList = new List();
myList.append(1);
myList.append(2);
console.log(myList.insertLarger(4)); // true

console.log(myList); // List { listSize: 3, pos: 0, dataStore: [ 1, 2, 4 ] }
console.log(myList.insertLarger(3)); // false
