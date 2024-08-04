import React from 'react';
import { sortArr1 } from './sortArr1';

export function Solution1() {
    return (
        <div>
            <h2>Solution With For Of Loop, In Operator and Direct Property Check</h2>
            <pre>
                <code>{`const sortArr = ${sortArr1.toString()}`}</code>
            </pre>
        </div>
    );
}
