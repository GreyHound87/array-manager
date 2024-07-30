export const sortArr2 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects');
    }

    const seenIds = new Set();

    arr.forEach((item) => {
        if (typeof item !== 'object') {
            throw new Error('The array must consist only of objects');
        }
        if (!item.id) {
            throw new Error('All objects must have an ID');
        }
        if (typeof item.id !== 'number') {
            throw new Error('IDs must be numeric values');
        }
        if (seenIds.has(item.id)) {
            throw new Error(`Multiple array objects have the same ID`);
        }
        seenIds.add(item.id);
    });

    const result = arr.slice().sort((a, b) => a.id - b.id);

    result.forEach((item) => Object.freeze(item));
    Object.freeze(result);
    return result;
};
