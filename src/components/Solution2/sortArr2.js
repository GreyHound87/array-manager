export const sortArr2 = (arr) => {
    if (!arr || arr.constructor !== Array) {
        throw new Error('Argument must be an array of objects.');
    }
    const copyArr = JSON.parse(JSON.stringify(arr));
    const ids = new Set();
    const sortedCopy = [];

    copyArr.forEach((item) => {
        if (typeof item !== 'object' || item === null) {
            throw new Error('The array must consist only of objects.');
        }

        const { id } = item;

        if (id === undefined) {
            throw new Error('All objects must have an ID');
        }

        if (typeof id !== 'number') {
            throw new Error('IDs must be numeric values.');
        }

        if (ids.has(id)) {
            throw new Error('Multiple array objects have the same ID.');
        }

        ids.add(id);

        sortedCopy[id] = item;
    });

    const result = sortedCopy.flatMap((item) => Object.freeze(item));

    return Object.freeze(result);
};
