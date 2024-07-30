import React from 'react';
import classes from './Footer.module.scss';

export function Footer({ results }) {
    return (
        <footer className={classes.footer}>
            <h3>Results</h3>
            <table className={classes.resultsTable}>
                <thead>
                    <tr>
                        <th>Solution</th>
                        <th>Data Size</th>
                        <th>Time Taken (ms)</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => (
                        <tr key={result.id}>
                            <td>{result.solution}</td>
                            <td>{result.dataSize}</td>
                            <td>{result.timeTaken}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </footer>
    );
}
