export const sortArr6 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    if (!arr.every((item) => typeof item === 'object' && item !== null)) {
        throw new Error('The array must consist only of objects.');
    }

    if (!arr.every((item) => 'id' in item)) {
        throw new Error('All objects must have an ID.');
    }

    if (!arr.every((item) => typeof item.id === 'number')) {
        throw new Error('IDs must be numeric values.');
    }

    const ids = new Set();
    for (const item of arr) {
        if (ids.has(item.id)) {
            throw new Error('Multiple array objects have the same ID.');
        }
        ids.add(item.id);
    }

    return Object.freeze(arr.map((item) => Object.freeze({ ...item })).sort((a, b) => a.id - b.id));
};
