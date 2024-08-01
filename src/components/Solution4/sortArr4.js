export const sortArr4 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const idsSeen = {};
    const deepCopiedAndFrozenArray = arr.map((obj) => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('The array must consist only of objects.');
        }
        if (!obj.hasOwnProperty('id')) {
            throw new Error('All objects must have an ID.');
        }
        if (typeof obj.id !== 'number') {
            throw new Error('IDs must be numeric values.');
        }
        if (idsSeen[obj.id]) {
            throw new Error('Multiple array objects have the same ID.');
        }
        idsSeen[obj.id] = true;

        const deepCopy = JSON.parse(JSON.stringify(obj));
        Object.freeze(deepCopy);
        return deepCopy;
    });

    deepCopiedAndFrozenArray.sort((a, b) => a.id - b.id);
    Object.freeze(deepCopiedAndFrozenArray);
    return deepCopiedAndFrozenArray;
};
