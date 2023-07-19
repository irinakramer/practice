function greaterThan(x) {
  return (n) => n > x;
}

const greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));
console.log(greaterThan10(9));
