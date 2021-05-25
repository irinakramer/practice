const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
n = array.length;

function sockMerchant(n, ar) {
    // sort the array
    ar.sort();
    //create object with elements as keys, and frequencies as values
    const mapped = ar.reduce((map, val) => {
        map[val] = (map[val] || 0) + 1;
        console.log(map)
        return map;
    }, {});
    // put frequencies into an array
    const values = Object.values(mapped);
    // get pairs from the frequencies
    const pairs = values.reduce((acc, curr) => {
        if (curr > 1) {
            acc += Math.floor(curr / 2)
        }
        return acc;
    }, 0)
    return pairs;
}

console.log(sockMerchant(n, array));