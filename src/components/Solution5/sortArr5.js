export const sortArr5 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects');
    }

    const idSet = new Set();

    const copiedArr = arr.map((obj) => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('The array must consist only of objects');
        }
        if (!('id' in obj)) {
            throw new Error('All objects must have an ID');
        }
        if (typeof obj.id !== 'number') {
            throw new Error('IDs must be numeric values');
        }
        if (idSet.has(obj.id)) {
            throw new Error('Multiple array objects have the same ID');
        }
        idSet.add(obj.id);

        const copy = JSON.parse(JSON.stringify(obj));
        return Object.freeze(copy);
    });

    copiedArr.sort((a, b) => a.id - b.id);

    return Object.freeze(copiedArr);
};
