// Iterable groups

// https://eloquentjavascript.net/06_object.html

class Group {
  constructor() {
    this.elements = [];
  }

  has(item) {
    return this.elements.includes(item);
  }

  add(item) {
    if (!this.has(item)) {
      this.elements.push(item);
    }
  }

  delete(item) {
    return (this.elements = this.elements.filter(
      (el) => el !== item
    ));
  }

  static from(collection) {
    let newGroup = new Group();
    for (let el of collection) {
      newGroup.add(el);
    }
    return newGroup;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.group = group;
  }
  next() {
    if (this.i >= this.group.elements.length) {
      return { done: true };
    } else {
      let value = this.group.elements[this.i];
      this.i++;
      return { value, done: false };
    }
  }
}

console.log(Group.from(['a', 'b', 'c']));
for (let value of Group.from(['a', 'b', 'c'])) {
  console.log(value);
}
// → a
// → b
// → c
