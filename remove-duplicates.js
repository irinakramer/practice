const str = 'This is is a test test string test';

// Method 1 - using Set
function removeDuplicates(str) {
    const arr = str.split(' '); // create array from string
    const uniqueSet = new Set(arr); // new Set, only stores unique values
    const uniqueArr = [...uniqueSet].join(' '); // spread all items into array, join back into string
    return uniqueArr;
}

console.log(removeDuplicates(str));

// Method 2 - using array.reduce()
function removeDuplicatesReduce(str) {
    const arr = str.split(' ');  // create array from string

    // reduce arr to include only unique values
    const uniqueArr = arr.reduce((acc, curr) => {
        if(acc.indexOf(curr) === -1) {
            acc.push(curr)
        }
        return acc;
    }, [])
    // convert arr back into string
    return uniqueArr.join(' ');
}

console.log(removeDuplicatesReduce(str));