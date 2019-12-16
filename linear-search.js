/**
 * Linear Search
 * 
 * Write a function linearSearch that accepts an array and a value
 * and returns the index at which the value exists.
 * If the value does not exist in the array, return -1.
 */

function linearSearch(arr, n){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) return i;       
    }
    return -1;
}
linearSearch([10,15,20,25,30], 25); // 3
linearSearch([34,51,1,2,3,45,56,687], 100) // -1