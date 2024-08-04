export const sortArr6 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    const invalidIndex = arr.findIndex(
        (item) => typeof item !== 'object' || item === null || !item.hasOwnProperty('id') || typeof item.id !== 'number'
    );

    if (invalidIndex !== -1) {
        throw new Error('Array elements must be objects with a numeric "id" property');
    }

    const idSet = new Set(arr.map((item) => item.id));
    if (idSet.size !== arr.length) {
        throw new Error('The "id" values must be unique');
    }

    return Object.freeze(arr.map((obj) => Object.freeze({ ...obj })).sort((a, b) => a.id - b.id));
};
