export const sortArr1 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    for (const item of arr) {
        if (typeof item !== 'object' || item === null) {
            throw new Error('Array elements must be objects');
        }
        if (!('id' in item)) {
            throw new Error('Each object must have an "id" property');
        }
        if (typeof item.id !== 'number') {
            throw new Error('The "id" property must be a number');
        }
    }

    const idSet = new Set(arr.map((item) => item.id));
    if (idSet.size !== arr.length) {
        throw new Error('The "id" values must be unique');
    }

    return Object.freeze(arr.map((obj) => Object.freeze({ ...obj })).sort((a, b) => a.id - b.id));
};
