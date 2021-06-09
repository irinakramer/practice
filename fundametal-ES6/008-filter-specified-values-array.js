/**
 * 8. Write a JavaScript program to filter out the specified values from a specified array. Return the original array without the filtered values.
 */

const arr = [34, 67, 98, 30, 66, 99];

const filterValues = (arr, val) => {
    return arr.filter((i) => i % val)
}
console.log(filterValues(arr, 3))


// Method 2 from w3resource

const pull = (arr, ...args) => {
    args.forEach(v => arr = arr.filter(item => item != v))
    return arr;
}
let arra1 = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(pull(arra1, 'a', 'c'));