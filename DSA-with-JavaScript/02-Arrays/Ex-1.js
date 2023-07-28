class Grades {
  constructor() {
    this.dataStore = [];
  }

  add(grade) {
    this.dataStore.push(grade);
  }

  average() {
    return (
      this.dataStore.reduce((acc, curr) => acc + curr) /
      this.dataStore.length
    );
  }
}

let student1 = new Grades();

student1.add(89);
student1.add(90);
student1.add(70);
student1.add(85);

console.log(student1.dataStore); // [ 89, 90, 70, 85 ]
console.log(student1.average()); // 83.5
