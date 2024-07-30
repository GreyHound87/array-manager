import React from 'react';
import classes from './Intro.module.scss';

export function Intro() {
    return (
        <div className={classes.intro}>
            <h2>Welcome to Array Manager SPA</h2>
            <p>
                This application allows you to manage and sort arrays of objects. You can choose between different
                sorting solutions and run them on datasets of various sizes.
            </p>
            <p>
                To get started, select a sorting solution from the navigation menu and then choose a dataset size to run
                the sorting algorithm.
            </p>
            <p>
                The results will be displayed below, allowing you to compare the performance of different sorting
                solutions.
            </p>
        </div>
    );
}
