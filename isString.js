function is_string(input) {
    return typeof input === 'string' || input instanceof String ? true : false
}

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));