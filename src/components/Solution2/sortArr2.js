export const sortArr2 = (arr) => {
    // Проверка, что arr является массивом
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    // Проверка каждого элемента массива
    const ids = new Set();
    const copiedAndFrozenObjects = arr.map((obj) => {
        // Проверка, что элемент является объектом
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('The array must consist only of objects.');
        }

        // Проверка наличия поля id и его числового значения
        if (!obj.hasOwnProperty('id') || typeof obj.id !== 'number') {
            throw new Error('All objects must have an ID. IDs must be numeric values.');
        }

        // Проверка уникальности id
        if (ids.has(obj.id)) {
            throw new Error('Multiple array objects have the same ID.');
        }
        ids.add(obj.id);

        // Создание глубокой копии объекта и заморозка
        const copiedObj = JSON.parse(JSON.stringify(obj));
        Object.freeze(copiedObj);
        return copiedObj;
    });

    // Сортировка массива по полю id
    const sortedArray = copiedAndFrozenObjects.sort((a, b) => a.id - b.id);

    // Заморозка нового массива
    Object.freeze(sortedArray);

    return sortedArray;
};
