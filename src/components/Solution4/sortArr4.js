export const sortArr4 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const ids = new Set();
    for (const item of arr) {
        if (typeof item !== 'object' || item === null) {
            throw new Error('The array must consist only of objects.');
        }
        if (!item.hasOwnProperty('id')) {
            throw new Error('All objects must have an ID.');
        }
        if (typeof item.id !== 'number') {
            throw new Error('IDs must be numeric values.');
        }
        if (ids.has(item.id)) {
            throw new Error('Multiple array objects have the same ID.');
        }
        ids.add(item.id);
    }

    const deepCopiedAndFrozenArray = arr.map((obj) => {
        const deepCopy = JSON.parse(JSON.stringify(obj));
        Object.freeze(deepCopy);
        return deepCopy;
    });

    deepCopiedAndFrozenArray.sort((a, b) => a.id - b.id);

    return Object.freeze(deepCopiedAndFrozenArray);
};
