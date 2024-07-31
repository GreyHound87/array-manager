export const sortArr1 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const allObjects = arr.every((item) => typeof item === 'object' && !Array.isArray(item));
    if (!allObjects) {
        throw new Error('The array must consist only of objects.');
    }

    const hasIdField = arr.every((obj) => 'id' in obj);
    if (!hasIdField) {
        throw new Error('All objects must have an ID.');
    }

    const idsAreNumbers = arr.every((obj) => typeof obj.id === 'number');
    if (!idsAreNumbers) {
        throw new Error('IDs must be numeric values.');
    }

    const idsAreUnique = Array.from(new Set(arr.map((obj) => obj.id))).length === arr.length;
    if (!idsAreUnique) {
        throw new Error('Multiple array objects have the same ID.');
    }

    const copiedArr = arr.map((obj) => JSON.parse(JSON.stringify(obj)));

    const sortedArr = copiedArr.sort((a, b) => a.id - b.id);

    const frozenArr = sortedArr.map((obj) => Object.freeze(obj));

    const frozenArray = Object.freeze(frozenArr);

    return frozenArray;
};
