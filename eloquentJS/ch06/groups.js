// Groups

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
}

let group = Group.from([10, 20]);
console.log(group);
// Group { elements: [ 10, 20 ] }
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
console.log(group);
// Group { elements: [ 20 ] }
