import React from 'react';
import classes from './Footer.module.scss';

export function Footer({ results }) {
    const dataSizes = ['sm', 'md', 'lg'];
    const sizeLabels = {
        sm: '1000 items',
        md: '10000 items',
        lg: '100000 items',
    };

    const calculateAverage = (arr) => {
        if (arr.length === 0) return 'N/A';
        const sum = arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
        return (sum / arr.length).toFixed(2);
    };

    const getColor = (average, min, max) => {
        if (average === 'N/A') return '#ffffff'; // Белый цвет для отсутствующих данных
        const avg = parseFloat(average);
        const ratio = (avg - min) / (max - min);
        const red = Math.round(255 * ratio);
        const green = Math.round(255 * (1 - ratio));
        return `rgb(${red}, ${green}, 0)`;
    };

    const getMinMax = (results, size) => {
        let min = Infinity;
        let max = -Infinity;
        Object.keys(results).forEach((solution) => {
            const avg = calculateAverage(results[solution][size]);
            if (avg !== 'N/A') {
                const avgNum = parseFloat(avg);
                if (avgNum < min) min = avgNum;
                if (avgNum > max) max = avgNum;
            }
        });
        return { min, max };
    };

    return (
        <footer className={classes.footer}>
            <h3>Results</h3>
            <table className={classes.resultsTable}>
                <thead>
                    <tr>
                        <th>Solution</th>
                        {dataSizes.map((size) => (
                            <th key={size}>{sizeLabels[size]}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(results).map((solution) => (
                        <tr key={solution}>
                            <td>{solution}</td>
                            {dataSizes.map((size) => {
                                const average = calculateAverage(results[solution][size]);
                                const { min, max } = getMinMax(results, size);
                                const color = getColor(average, min, max);
                                return (
                                    <td key={size} style={{ backgroundColor: color }}>
                                        {average !== 'N/A'
                                            ? `${average} ms (${results[solution][size].length} attempts)`
                                            : 'N/A'}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </footer>
    );
}
