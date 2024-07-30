export const sortArr1 = (arr) => {
    // Проверка, что аргумент является массивом
    if (!Array.isArray(arr)) {
        throw new Error('Argument must be an array of objects.');
    }

    // Проверка, что все элементы являются объектами
    const allObjects = arr.every((item) => typeof item === 'object' && !Array.isArray(item));
    if (!allObjects) {
        throw new Error('The array must consist only of objects.');
    }

    // Проверка, что каждый объект содержит поле id
    const hasIdField = arr.every((obj) => 'id' in obj);
    if (!hasIdField) {
        throw new Error('All objects must have an ID.');
    }

    // Проверка, что значение поля id является числом
    const idsAreNumbers = arr.every((obj) => typeof obj.id === 'number');
    if (!idsAreNumbers) {
        throw new Error('IDs must be numeric values.');
    }

    // Проверка на уникальность значений id
    const idsAreUnique = Array.from(new Set(arr.map((obj) => obj.id))).length === arr.length;
    if (!idsAreUnique) {
        throw new Error('Multiple array objects have the same ID.');
    }

    // Создание глубокой копии каждого объекта в массиве
    const copiedArr = arr.map((obj) => JSON.parse(JSON.stringify(obj)));

    // Сортировка массива по значению поля id в порядке возрастания
    const sortedArr = copiedArr.sort((a, b) => a.id - b.id);

    // Замораживание каждой копии объекта для иммутабельности
    const frozenArr = sortedArr.map((obj) => Object.freeze(obj));

    // Замораживание самого массива для иммутабельности
    const frozenArray = Object.freeze(frozenArr);

    return frozenArray;
};
