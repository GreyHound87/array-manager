export const sortArr5 = (arr) => {
    if (!arr || typeof arr !== 'object' || arr.length === undefined) {
        throw new Error('Argument must be an array of objects');
    }

    const result = arr.toSorted((a, b) => {
        if (!a || typeof a !== 'object' || !b || typeof b !== 'object') {
            throw new Error('The array must consist only of objects');
        }
        if (a === undefined || b === undefined) {
            throw new Error('The array must consist only of objects');
        }
        if (!a.id || !b.id) {
            throw new Error('All objects must have an ID');
        }
        return a.id - b.id;
    });

    const idSet = new Set();

    const itemCount = result.length;
    for (let i = 0; i < itemCount; i++) {
        const item = result[i];

        if (item === undefined || item === null) {
            throw new Error('The array must consist only of objects');
        }
        if (typeof item !== 'object') {
            throw new Error('The array must consist only of objects');
        }
        if (!item.hasOwnProperty('id')) {
            throw new Error('All objects must have an ID');
        }
        if (typeof item.id !== 'number') {
            throw new Error('IDs must be numeric values');
        }
        if (idSet.has(item.id)) {
            throw new Error('Multiple array objects have the same ID');
        }
        idSet.add(item.id);
        Object.freeze(item);
    }

    Object.freeze(result);
    return result;
};
