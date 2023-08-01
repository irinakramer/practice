const { List } = require('./ListClass');

const people = new List();

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

function displayByGender(list, gender) {
  for (list.front(); list.hasNext(); ) {
    let listItem = list.next();

    if (listItem.gender === gender) {
      console.log(listItem);
    }
  }
}

const irina = new Person('irina', 'f');
const glen = new Person('glen', 'm');
people.append(irina);
people.append(glen);
displayByGender(people, 'f');
