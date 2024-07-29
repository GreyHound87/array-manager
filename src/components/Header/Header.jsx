import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';

export function Header() {
    return (
        <header className={classes.header}>
            <h1>Array Manager SPA</h1>
            <p className={classes.description}>
                The function should take an array of objects with an id and return a new array that is a sorted and
                immutable copy of the original.
            </p>
            <nav className={classes.nav}>
                <Link to="/" className={classes.tab}>
                    Solution 1
                </Link>
                <Link to="/solution2" className={classes.tab}>
                    Solution 2
                </Link>
            </nav>
            <div className={classes.buttons}>
                <button type="button" onClick={() => {}}>
                    Run with 100 items
                </button>
                <button type="button" onClick={() => {}}>
                    Run with 1000 items
                </button>
                <button type="button" onClick={() => {}}>
                    Run with 10000 items
                </button>
            </div>
        </header>
    );
}
