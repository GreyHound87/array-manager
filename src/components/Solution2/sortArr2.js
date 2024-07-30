export const sortArr2 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects');
    }

    // For check for unique IDs
    /* const seenIds = new Set(); */

    const result = arr.slice().sort((a, b) => {
        if (typeof a !== 'object' || typeof b !== 'object') {
            throw new Error('The array must consist only of objects');
        }
        if (!a.id || !b.id) {
            throw new Error('All objects must have an ID');
        }
        if (typeof a.id !== 'number' || typeof b.id !== 'number') {
            throw new Error('IDs must be numeric values');
        }

        // Check for unique IDs
        /* if (seenIds.has(a.id) || seenIds.has(b.id) || a.id === b.id) {
            throw new Error('Multiple array objects have the same ID');
        }
        seenIds.add(a.id);
        seenIds.add(b.id); */

        Object.freeze(a);
        Object.freeze(b);

        return a.id - b.id;
    });

    Object.freeze(result);
    return result;
};
