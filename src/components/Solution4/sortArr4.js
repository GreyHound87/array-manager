export const sortArr4 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    const validObjects = arr.reduce((acc, item) => {
        if (typeof item === 'object' && item !== null && item.hasOwnProperty('id') && typeof item.id === 'number') {
            acc.push(item);
        }
        return acc;
    }, []);

    if (validObjects.length !== arr.length) {
        throw new Error('Array elements must be objects with a numeric "id" property');
    }

    const idSet = new Set(validObjects.map((item) => item.id));
    if (idSet.size !== validObjects.length) {
        throw new Error('The "id" values must be unique');
    }

    return Object.freeze(validObjects.map((obj) => Object.freeze({ ...obj })).sort((a, b) => a.id - b.id));
};
