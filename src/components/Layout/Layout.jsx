import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { sortArr1 } from '../Solution1/sortArr1';
import { sortArr2 } from '../Solution2/sortArr2';

export function Layout({ children }) {
    const [result, setResult] = useState('');
    const [solution, setSolution] = useState('');

    function handleRunScript(data) {
        const startTime = performance.now();
        try {
            switch (solution) {
                case 'Solution1':
                    sortedData = sortArr1(data);
                    break;
                case 'Solution2':
                    sortedData = sortArr2(data);
                    break;
                default:
                    throw new Error('Unknown solution');
            }
        } catch (error) {
            console.error(error.message);
        }
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        return `${solution}: Array length: ${data.length}, Time taken: ${timeTaken.toFixed(2)} ms`;
    }

    return (
        <>
            <Header
                handleRunScript={handleRunScript}
                setResult={setResult}
                setSolution={setSolution}
                solution={solution}
            />
            <div className={classes.layout}>
                <div className={classes.container}>{children}</div>
            </div>
            <Footer result={result} />
        </>
    );
}
