export const sortArr5 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    if (
        !arr.every(
            (item) =>
                typeof item === 'object' && item !== null && item.hasOwnProperty('id') && typeof item.id === 'number'
        )
    ) {
        throw new Error('Array elements must be objects with a numeric "id" property');
    }

    const idSet = new Set(arr.map((item) => item.id));
    if (idSet.size !== arr.length) {
        throw new Error('The "id" values must be unique');
    }

    return Object.freeze(
        []
            .concat(arr)
            .map((obj) => Object.freeze({ ...obj }))
            .sort((a, b) => a.id - b.id)
    );
};
