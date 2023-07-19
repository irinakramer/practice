const SCRIPTS = require('../scripts');

// find average year for living and dead scripts
const script = {
  name: 'Adlam',
  ranges: [
    [125184, 125259],
    [125264, 125274],
    [125278, 125280],
  ],
  direction: 'rtl',
  year: 1987,
  living: true,
  link: 'https://en.wikipedia.org/wiki/Fula_alphabets#Adlam_alphabet',
};

function average(array) {
  return (
    array.reduce((acc, curr) => {
      return (acc += curr);
    }, 0) / array.length
  );
}

const living = SCRIPTS.filter((script) => script.living);
const yearsLiving = living.map((script) => script.year);
const averageLiving = average(yearsLiving);

console.log(
  Math.round(
    average(
      SCRIPTS.filter((script) => script.living).map(
        (script) => script.year
      )
    )
  )
);

console.log(
  Math.round(
    average(
      SCRIPTS.filter((script) => !script.living).map(
        (script) => script.year
      )
    )
  )
);

console.log(average([10, 20]));
