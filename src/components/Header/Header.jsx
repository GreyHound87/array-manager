import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import classes from './Header.module.scss';
import { data1000, data10000, data100000 } from '../../constants/mockData';

export function Header({ handleRunScript, setSolution, solution }) {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };
    return (
        <header className={classes.header}>
            <h1>Array Manager SPA</h1>

            <article className={classes.intro}>
                <h2>Technical Specification for Sorting Function</h2>

                <p>
                    <strong>Task Description:</strong> The function should take an array of objects, each containing a
                    unique identifier <code>id</code>. The function should return a new array that is a sorted and
                    immutable copy of the original array.
                </p>
                <button type="button" onClick={toggleDetails} className={classes.toggleDetailsBtn}>
                    {showDetails ? 'Hide TS Details' : 'Show TS Details'}
                </button>
                {showDetails && (
                    <>
                        <h3>Function Requirements</h3>
                        <h4>Input Data:</h4>
                        <ul>
                            <li>The function accepts a single argument — an array of objects.</li>
                            <li>
                                Each object in the array must contain a field <code>id</code>, which is a unique numeric
                                value.
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
                                The function must sort the array by the value of the <code>id</code> field in ascending
                                order.
                            </li>
                        </ul>
                        <h4>Output Data:</h4>
                        <ul>
                            <li>
                                The function must return a new array that is a sorted and immutable copy of the original
                                array.
                            </li>
                            <li>The new array must be frozen to make it immutable.</li>
                        </ul>
                        <h4>Error Handling:</h4>
                        <ul>
                            <li>If the input argument is not an array, the function must throw an error.</li>
                            <li>If any element in the array is not an object, the function must throw an error.</li>
                            <li>
                                If any object does not contain the <code>id</code> field, the function must throw an
                                error.
                            </li>
                            <li>
                                If the value of the <code>id</code> field is not a number, the function must throw an
                                error.
                            </li>
                            <li>
                                If the <code>id</code> values are not unique, the function must throw an error.
                            </li>
                        </ul>
                    </>
                )}
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
                <Link
                    to="/solution3"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution3' })}
                    onClick={() => setSolution('Solution3')}
                >
                    Solution 3
                </Link>
                <Link
                    to="/solution4"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution4' })}
                    onClick={() => setSolution('Solution4')}
                >
                    Solution 4
                </Link>
                <Link
                    to="/solution5"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution5' })}
                    onClick={() => setSolution('Solution5')}
                >
                    Solution 5
                </Link>
                <Link
                    to="/solution6"
                    className={classNames(classes.tab, { [classes.activeTab]: solution === 'Solution6' })}
                    onClick={() => setSolution('Solution6')}
                >
                    Solution 6
                </Link>
            </nav>
            <div className={classes.buttons}>
                <button type="button" onClick={() => handleRunScript(data1000, 'sm')} disabled={!solution}>
                    Run with 1000 items
                </button>
                <button type="button" onClick={() => handleRunScript(data10000, 'md')} disabled={!solution}>
                    Run with 10000 items
                </button>
                <button type="button" onClick={() => handleRunScript(data100000, 'lg')} disabled={!solution}>
                    Run with 100000 items
                </button>
            </div>
        </header>
    );
}
