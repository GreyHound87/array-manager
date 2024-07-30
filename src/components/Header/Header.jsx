import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Header.module.scss';
import { data100, data1000, data10000 } from '../../constants/mockData';

export function Header({ handleRunScript, setSolution, solution }) {
    return (
        <header className={classes.header}>
            <h1>Array Manager SPA</h1>
            <article className={classes.intro}>
                <h2>Detailed Technical Specification for Sorting Function</h2>
                <p>
                    <strong>Task Description:</strong> The function should take an array of objects, each containing a
                    unique identifier <code>id</code>. The function should return a new array that is a sorted and
                    immutable copy of the original array.
                </p>
                <h3>Function Requirements</h3>
                <h4>Input Data:</h4>
                <ul>
                    <li>The function accepts a single argument — an array of objects.</li>
                    <li>
                        Each object in the array must contain a field <code>id</code>, which is a unique numeric value.
                    </li>
                </ul>
                <h4>Input Data Validation:</h4>
                <ul>
                    <li>The function must check that the input argument is an array.</li>
                    <li>The function must check that each element in the array is an object.</li>
                    <li>
                        The function must check that each object contains a field <code>id</code>.
                    </li>
                    <li>
                        The function must check that the value of the <code>id</code> field is a number.
                    </li>
                    <li>
                        The function must check that all <code>id</code> values are unique.
                    </li>
                </ul>
                <h4>Data Processing:</h4>
                <ul>
                    <li>The function must create a deep copy of each object in the array.</li>
                    <li>The function must freeze each object to make it immutable.</li>
                    <li>
                        The function must sort the array by the value of the <code>id</code> field in ascending order.
                    </li>
                </ul>
                <h4>Output Data:</h4>
                <ul>
                    <li>
                        The function must return a new array that is a sorted and immutable copy of the original array.
                    </li>
                    <li>The new array must be frozen to make it immutable.</li>
                </ul>
                <h4>Error Handling:</h4>
                <ul>
                    <li>
                        If the input argument is not an array, the function must throw an error with the message:
                        Argument must be an array of objects.
                    </li>
                    <li>
                        If any element in the array is not an object, the function must throw an error with the message:
                        The array must consist only of objects.
                    </li>
                    <li>
                        If any object does not contain the <code>id</code> field, the function must throw an error with
                        the message: All objects must have an ID.
                    </li>
                    <li>
                        If the value of the <code>id</code> field is not a number, the function must throw an error with
                        the message: IDs must be numeric values.
                    </li>
                    <li>
                        If the <code>id</code> values are not unique, the function must throw an error with the message:
                        Multiple array objects have the same ID.
                    </li>
                </ul>
            </article>
            <nav className={classes.nav}>
                <Link
                    to="/solution1"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution1' })}
                    onClick={() => setSolution('Solution1')}
                >
                    Solution 1
                </Link>
                <Link
                    to="/solution2"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution2' })}
                    onClick={() => setSolution('Solution2')}
                >
                    Solution 2
                </Link>
            </nav>
            <div className={classes.buttons}>
                <button type="button" onClick={() => handleRunScript(data100)} disabled={!solution}>
                    Run with 100 items
                </button>
                <button type="button" onClick={() => handleRunScript(data1000)} disabled={!solution}>
                    Run with 1000 items
                </button>
                <button type="button" onClick={() => handleRunScript(data10000)} disabled={!solution}>
                    Run with 10000 items
                </button>
            </div>
        </header>
    );
}
