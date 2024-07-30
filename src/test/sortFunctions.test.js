import { sortArr1 } from '../components/Solution1/sortArr1';
import { sortArr2 } from '../components/Solution2/sortArr2';

const testSortFunction = (sortFunction) => {
    describe(`${sortFunction.name}`, () => {
        test('should throw an error if the input is not an array', () => {
            expect(() => sortFunction('not an array')).toThrow('Argument must be an array of objects');
        });

        test('should throw an error if any element in the array is not an object', () => {
            const data = [1, 2, 3];
            expect(() => sortFunction(data)).toThrow('The array must consist only of objects');
        });

        test('should throw an error if any object does not contain the id field', () => {
            const data = [{ name: 'Item 1' }];
            expect(() => sortFunction(data)).toThrow('All objects must have an ID');
        });

        test('should throw an error if the id field is not a number', () => {
            const data = [{ id: '1', name: 'Item 1' }];
            expect(() => sortFunction(data)).toThrow('IDs must be numeric values');
        });

        test('should throw an error if the id values are not unique', () => {
            const data = [
                { id: 1, name: 'Item 1' },
                { id: 1, name: 'Item 2' },
            ];
            expect(() => sortFunction(data)).toThrow('Multiple array objects have the same ID');
        });

        test('should return a sorted and immutable copy of the original array', () => {
            const data = [
                { id: 3, name: 'Item 3' },
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
            ];
            const result = sortFunction(data);
            expect(result).toEqual([
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' },
            ]);
            expect(Object.isFrozen(result)).toBe(true);
            result.forEach((item) => {
                expect(Object.isFrozen(item)).toBe(true);
            });
        });
    });
};

testSortFunction(sortArr1);
testSortFunction(sortArr2);
