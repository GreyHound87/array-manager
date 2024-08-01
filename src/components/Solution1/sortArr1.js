export const sortArr1 = (arr) => {
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const seenIds = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'object' || arr[i] === null) {
            throw new Error('The array must consist only of objects.');
        }
        if ('id' in arr[i]) {
            if (seenIds.has(arr[i].id)) {
                throw new Error('Multiple array objects have the same ID.');
            } else {
                seenIds.add(arr[i].id);
            }
        } else {
            throw new Error('All objects must have an ID.');
        }
        if (typeof arr[i].id !== 'number') {
            throw new Error('IDs must be numeric values.');
        }
    }

    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const newObj = {};
        for (const key in arr[i]) {
            if (arr[i].hasOwnProperty(key)) {
                newObj[key] = arr[i][key];
            }
        }
        newArr.push(Object.freeze(newObj));
    }

    newArr.sort((a, b) => a.id - b.id);

    return Object.freeze(newArr);
};
