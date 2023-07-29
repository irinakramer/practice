class List {
  constructor() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
  }

  append(element) {
    this.dataStore[this.listSize++] = element;
  }

  find(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return i;
    }
    return -1;
  }

  remove(element) {
    let foundAt = this.find(element);

    for (let i = 0; i < this.dataStore.length; i++) {
      if (i === foundAt) {
        this.dataStore.splice(foundAt, 1);
        this.listSize--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.listSize;
  }

  toString() {
    return this.dataStore;
  }

  insert(element, after) {
    const insertPos = this.find(after);

    if (insertPos > -1) {
      this.dataStore.splice(insertPos + 1, 0, element);
      this.listSize++;
      return true;
    }
    return false;
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i] === element) return true;
    }
    return false;
  }

  moveTo(position) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }

  previous() {
    return this.dataStore[--this.pos];
  }

  next() {
    return this.dataStore[this.pos++];
  }

  hasNext() {
    if (this.pos > this.listSize - 1) return false;
    return true;
  }

  hasPrevious() {
    if (this.pos <= 0) return false;
    return true;
  }

  front() {
    this.pos = 0;
  }

  back() {
    this.pos = this.listSize - 1;
  }

  currPos() {
    return this.pos;
  }
}

let myList = new List();
myList.append(1);
myList.append(2);
myList.remove(2);
myList.insert(2, 1);
console.log(myList.toString());
myList.moveTo(1);
console.log(myList.currPos());
console.log(myList.previous());
console.log(myList.next());
console.log(myList.hasNext());
console.log(myList.hasPrevious());
myList.append(3);
console.log(myList.toString());

// iterators
for (myList.front(); myList.hasNext(); ) {
  console.log(myList.next());
}

for (myList.back(); myList.hasPrevious(); ) {
  console.log(myList.previous());
}
