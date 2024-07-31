export const sortArr3 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const ids = new Set();
    arr.forEach((item) => {
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
    });

    const deepCopyAndFreeze = (obj) => {
        const copy = JSON.parse(JSON.stringify(obj));
        return Object.freeze(copy);
    };

    const copiedArray = arr.map(deepCopyAndFreeze);

    const sortedArray = copiedArray.sort((a, b) => a.id - b.id);

    return Object.freeze(sortedArray);
};
