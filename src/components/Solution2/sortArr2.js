export const sortArr2 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const ids = new Set();
    const copiedAndFrozenObjects = arr.map((obj) => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('The array must consist only of objects.');
        }

        if (!obj.hasOwnProperty('id') || typeof obj.id !== 'number') {
            throw new Error('All objects must have an ID. IDs must be numeric values.');
        }

        if (ids.has(obj.id)) {
            throw new Error('Multiple array objects have the same ID.');
        }
        ids.add(obj.id);

        const copiedObj = JSON.parse(JSON.stringify(obj));
        Object.freeze(copiedObj);
        return copiedObj;
    });

    const sortedArray = copiedAndFrozenObjects.sort((a, b) => a.id - b.id);

    Object.freeze(sortedArray);

    return sortedArray;
};
