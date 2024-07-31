import React from 'react';
import { sortArr5 } from './sortArr5';

export function Solution5() {
    return (
        <div>
            <h2>Solution from Claude 3.5 Sonnet Model</h2>
            <pre>
                <code>{`const sortArr = ${sortArr5.toString()}`}</code>
            </pre>
        </div>
    );
}
