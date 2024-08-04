import { sortArr1 } from '../components/Solution1/sortArr1';
import { sortArr2 } from '../components/Solution2/sortArr2';
import { sortArr3 } from '../components/Solution3/sortArr3';
import { sortArr4 } from '../components/Solution4/sortArr4';
import { sortArr5 } from '../components/Solution5/sortArr5';
import { sortArr6 } from '../components/Solution6/sortArr6';

const testSortFunction = (sortFunction) => {
    describe(`${sortFunction.name}`, () => {
        test('should throw an error if the input is an string', () => {
            expect(() => sortFunction('not an array')).toThrow();
        });

        test('should throw an error if the input is an object', () => {
            expect(() => sortFunction({})).toThrow();
        });

        test('should throw an error if the input is a boolean', () => {
            expect(() => sortFunction(true)).toThrow();
        });

        test('should throw an error if the input is a function', () => {
            expect(() => sortFunction(() => {})).toThrow();
        });

        test('should throw an error if the input is a number', () => {
            expect(() => sortFunction(42)).toThrow();
        });

        test('should throw an error if the input is undefined', () => {
            expect(() => sortFunction(undefined)).toThrow();
        });

        test('should throw an error if the input is null', () => {
            expect(() => sortFunction(null)).toThrow();
        });

        test('should throw an error if any element in the array is Number', () => {
            const dataWithNumber = [{ id: 1, name: 'Item 1' }, 1];
            expect(() => sortFunction(dataWithNumber)).toThrow();
        });
        test('should throw an error if any element in the array is Boolean', () => {
            const dataWithBoolean = [{ id: 1, name: 'Item 1' }, true];
            expect(() => sortFunction(dataWithBoolean)).toThrow();
        });
        test('should throw an error if any element in the array is Function', () => {
            const dataWithFunction = [{ id: 1, name: 'Item 1' }, () => {}];
            expect(() => sortFunction(dataWithFunction)).toThrow();
        });
        test('should throw an error if any element in the array is String', () => {
            const dataWithString = [{ id: 1, name: 'Item 1' }, 'string'];
            expect(() => sortFunction(dataWithString)).toThrow();
        });
        test('should throw an error if any element in the array is Undefined', () => {
            const dataWithUndefined = [{ id: 1, name: 'Item 1' }, undefined];
            expect(() => sortFunction(dataWithUndefined)).toThrow();
        });
        test('should throw an error if any element in the array is Null', () => {
            const dataWithNull = [{ id: 1, name: 'Item 1' }, null];
            expect(() => sortFunction(dataWithNull)).toThrow();
        });

        test('should throw an error if any object does not contain the id field', () => {
            const data = [{ name: 'Item 1' }];
            expect(() => sortFunction(data)).toThrow();
        });

        test('should throw an error if the id field is a String', () => {
            const dataWithStringId = [{ id: '1', name: 'Item 1' }];
            expect(() => sortFunction(dataWithStringId)).toThrow();
        });
        test('should throw an error if the id field is an Object', () => {
            const dataWithObjectId = [{ id: {}, name: 'Item 1' }];
            expect(() => sortFunction(dataWithObjectId)).toThrow();
        });
        test('should throw an error if the id field is Boolean', () => {
            const dataWithBooleanId = [{ id: true, name: 'Item 1' }];
            expect(() => sortFunction(dataWithBooleanId)).toThrow();
        });
        test('should throw an error if the id field is a Function', () => {
            const dataWithFunctionId = [{ id: () => {}, name: 'Item 1' }];
            expect(() => sortFunction(dataWithFunctionId)).toThrow();
        });
        test('should throw an error if the id field is Undefined', () => {
            const dataWithUndefinedId = [{ id: undefined, name: 'Item 1' }];
            expect(() => sortFunction(dataWithUndefinedId)).toThrow();
        });
        test('should throw an error if the id field is Null', () => {
            const dataWithNullId = [{ id: null, name: 'Item 1' }];
            expect(() => sortFunction(dataWithNullId)).toThrow();
        });

        test('should throw an error if the id values are not unique', () => {
            const data = [
                { id: 1, name: 'Item 1' },
                { id: 1, name: 'Item 2' },
            ];
            expect(() => sortFunction(data)).toThrow();
        });

        test('should return a sorted and immutable copy of the original array', () => {
            const originalData = [
                { id: 3, name: 'Item 3' },
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
            ];
            const data = [...originalData];
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
            expect(data).toEqual(originalData);
        });
    });
};

testSortFunction(sortArr1);
testSortFunction(sortArr2);
testSortFunction(sortArr3);
testSortFunction(sortArr4);
testSortFunction(sortArr5);
testSortFunction(sortArr6);
