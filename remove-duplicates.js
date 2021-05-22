const str = 'This is is a test test string test';

function removeDuplicates(str) {
    const arr = str.split(' '); // create array from string
    const uniqueSet = new Set(arr); // new Set, only stores unique values
    const uniqueArr = [...uniqueSet].join(' '); // spread all items into array, join back into string
    return uniqueArr;
}

console.log(removeDuplicates(str));