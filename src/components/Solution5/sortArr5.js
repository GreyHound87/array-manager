export const sortArr5 = (arr) => {
    if (!arr || typeof arr !== 'object' || arr.length === undefined) {
        throw new Error('Argument must be an array of objects');
    }

    const result = [];
    const idSet = {};

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (typeof item !== 'object' || item === null) {
            throw new Error('The array must consist only of objects');
        }

        if (!('id' in item)) {
            throw new Error('All objects must have an ID');
        }

        if (typeof item.id !== 'number') {
            throw new Error('IDs must be numeric values');
        }

        if (idSet[item.id]) {
            throw new Error('Multiple array objects have the same ID');
        }

        idSet[item.id] = true;

        const newItem = {};
        for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
                newItem[key] = item[key];
            }
        }
        Object.freeze(newItem);
        result.push(newItem);
    }

    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (result[i].id > result[j].id) {
                const temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }

    Object.freeze(result);
    return result;
};
