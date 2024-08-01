export const sortArr3 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects');
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object' || arr[i] === null) {
            throw new Error('The array must consist only of objects');
        }
        if (!('id' in arr[i])) {
            throw new Error('All objects must have an ID');
        }
        if (typeof arr[i].id !== 'number') {
            throw new Error('IDs must be numeric values');
        }
    }

    const ids = {};
    for (let i = 0; i < arr.length; i++) {
        if (ids[arr[i].id]) {
            throw new Error('Multiple array objects have the same ID');
        }
        ids[arr[i].id] = true;
    }

    const deepCopy = arr.map((obj) => {
        const newObj = {};
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            newObj[key] = obj[key];
        }
        return Object.freeze(newObj);
    });

    const sortedArray = deepCopy.slice().sort((a, b) => a.id - b.id);

    return Object.freeze(sortedArray);
};
