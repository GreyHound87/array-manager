export const sortArr5 = (arr) => {
    if (!arr || typeof arr !== 'object' || arr.length === undefined) {
        throw new Error('Argument must be an array of objects');
    }

    const idSet = new Set();
    const result = arr.toSorted((a, b) => a.id - b.id);

    const itemCount = result.length;
    for (let i = 0; i < itemCount; i++) {
        const item = result[i];

        if (typeof item !== 'object' || item === null) {
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
