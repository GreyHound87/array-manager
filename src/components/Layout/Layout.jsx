import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { sortArr1 } from '../Solution1/sortArr1';

export function Layout({ children }) {
    const [result, setResult] = useState('');
    //    const [solution, setSolution] = useState('Solution1');

    function handleRunScript(data) {
        const startTime = performance.now();
        try {
            sortArr1(data);
        } catch (error) {
            console.error(error.message);
        }
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        return `sortArr1: Array length: ${data.length}, Time taken: ${timeTaken.toFixed(2)} ms`;
    }

    return (
        <>
            <Header handleRunScript={handleRunScript} setResult={setResult} />
            <div className={classes.layout}>
                <div className={classes.container}>{children}</div>
            </div>
            <Footer result={result} />
        </>
    );
}
