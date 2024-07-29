export const sortArr1 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects');
    }
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object') {
            throw new Error('The array must consist only of objects');
        }
        if (!arr[i].id) {
            throw new Error(`Object #${i + 1} does not have an ID`);
        }
        if (typeof arr[i].id !== 'number') {
            throw new Error(`Object #${i + 1} ID is not a numeric value`);
        }
        /* if (sortedArr[arr[i].id]) {
            throw new Error(`Multiple array objects have the same ID: ${arr[i].id}`);
        } */
        sortedArr[arr[i].id] = structuredClone(arr[i]);
        Object.freeze(sortedArr[arr[i].id]);
    }
    const result = sortedArr.flat();
    Object.freeze(result);
    return result;
};
