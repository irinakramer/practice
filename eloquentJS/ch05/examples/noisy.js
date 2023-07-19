function noisy(f) {
  return (...args) => {
    let result = f(...args);
    console.log('calling with args: ', ...args, ', result: ', result);

    return result;
  };
}

console.log(noisy(Math.min)(1, 2, 3));
console.log(noisy(Math.max)(1, 2, 3));
console.log(noisy(parseInt)(45.6));
