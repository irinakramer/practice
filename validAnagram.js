function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let val of str1) {
        // Access the char in the object
        // In parents we're checking if the char is present in the obj:
            // frequencyCounter1[val] - means it already exists
            // 0 - means it's not there
        // + 1 - means add one to either value (whichever is )
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of str2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        // check if the key of frequencyCounter1 exists in frequencyCounter2
        if (!(key in frequencyCounter2)) {
            return false;
        }
        // check if the frequency of keys from frequencyCounter1 is
        // equal to the frequency of keys from frequencyCounter2
        if (frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }

    return true;
}

validAnagram("listen", "silent");