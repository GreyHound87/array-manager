import React from 'react';
import classes from './Footer.module.scss';

export function Footer({ result }) {
    return (
        <footer className={classes.footer}>
            <p>Results: {result}</p>
        </footer>
    );
}
