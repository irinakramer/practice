/**
 * 6. Write a JavaScript program to target a given value in a nested JSON object, based on the given key.
 */

const dig = (obj, target) =>
    target in obj
        ? obj[target]
        : Object.values(obj).reduce((acc, curr) => {
            if (acc !== undefined) return acc;
            if (typeof curr === 'object') return dig(curr, target)
        }, undefined);

const data = {
    level1: {
        level2: {
            level3: 'some data'
        }
    }
};

const dog = {
    "status": "success",
    "message": "https://images.dog.ceo/breeds/african/n02116738_1105.jpg"
}

console.log(dig(data, 'level3'));
console.log(dig(data, 'level4'));
console.log(dig(dog, 'message'));