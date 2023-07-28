const { flatten2D } = require('../helpers/arrayHelper');

class weeklyTemps {
  constructor() {
    this.dataStore = [[], [], [], []];
  }

  add(temp) {
    for (let week = 0; week < this.dataStore.length; week++) {
      if (this.dataStore[week].length < 7) {
        this.dataStore[week].push(temp);
        break;
      }
    }
  }

  average() {
    let alltemps = flatten2D(this.dataStore);

    return Math.round(
      alltemps.reduce((acc, curr) => acc + curr) / alltemps.length
    );
  }

  weekAverage(n) {
    if (this.dataStore[n].length == 0) return 'No temps available';

    return Math.round(
      this.dataStore[n].reduce((acc, curr) => acc + curr, 0) /
        this.dataStore[n].length
    );
  }

  allWeeksAverage() {
    let total = 0,
      count = 0;

    for (let i = 0; i < this.dataStore.length; i++) {
      if (this.dataStore[i].length == 0) continue; // ignore empty weeks

      total += this.weekAverage(i);
      count++;
    }

    return Math.round(total / count);
  }
}

let july = new weeklyTemps();
console.log(july.dataStore);
july.add(89);
july.add(90);
july.add(90);
july.add(90);
july.add(100);
july.add(89);
july.add(90);
july.add(90);
july.add(99);
july.add(103);
july.add(105);
july.add(100);
july.add(107);
july.add(110);
console.log(july.dataStore);
console.log(july.average());
console.log(july.weekAverage(0));
console.log(july.weekAverage(1));
console.log(july.allWeeksAverage());
