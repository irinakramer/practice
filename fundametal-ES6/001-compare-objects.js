/**
 * https://www.w3resource.com/
 * Exercise-1: Compare two objects to determine if the first one contains equivalent property values to the second one
 * 
 */

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

const object2 = {
    a: 'somestring',
    b: 42,
    c: false
};

function compareObjects(obj1, obj2) {
    // get arrays of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // compare array lengths
    if (keys1.length !== keys2.length) {
        return false;
    }

    // iterate over keys array and compare values for each key
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(compareObjects(object1, object2)) // true

// Method 2 - w3resource
const matches = (obj, source) => {
    return Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key])
}
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false