import React, { useState } from 'react';
import classes from './Layout.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { sortArr1 } from '../Solution1/sortArr1';
import { sortArr2 } from '../Solution2/sortArr2';
import { sortArr3 } from '../Solution3/sortArr3';

export function Layout({ children }) {
    const [results, setResults] = useState([]);
    const [solution, setSolution] = useState('');

    function handleRunScript(data) {
        const startTime = performance.now();
        try {
            switch (solution) {
                case 'Solution1':
                    sortArr1(data);
                    break;
                case 'Solution2':
                    sortArr2(data);
                    break;
                case 'Solution3':
                    sortArr3(data);
                    break;
                default:
                    throw new Error('Unknown solution');
            }
        } catch (error) {
            console.error(error.message);
        }
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        const newResult = {
            id: results.length + 1,
            solution,
            dataSize: data.length,
            timeTaken: timeTaken.toFixed(2),
        };
        setResults((prevResults) => [...prevResults, newResult]);
    }

    return (
        <>
            <Header handleRunScript={handleRunScript} setSolution={setSolution} solution={solution} />
            <div className={classes.layout}>
                <div className={classes.container}>{children}</div>
            </div>
            <Footer results={results} />
        </>
    );
}
