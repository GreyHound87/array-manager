export const sortArr2 = (arr) => {
    if (typeof arr !== 'object' || arr === null || !Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    const ids = [];
    const copyArr = arr.reduce((acc, obj) => {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('The array must consist only of objects.');
        }
        if (!('id' in obj)) {
            throw new Error('All objects must have an ID.');
        }
        if (typeof obj.id !== 'number') {
            throw new Error('IDs must be numeric values.');
        }
        if (ids.includes(obj.id)) {
            throw new Error('Multiple array objects have the same ID.');
        }
        ids.push(obj.id);

        const copyObj = JSON.parse(JSON.stringify(obj));
        Object.freeze(copyObj);

        acc.push(copyObj);
        return acc;
    }, []);

    copyArr.sort((a, b) => a.id - b.id);

    Object.freeze(copyArr);

    return copyArr;
};
