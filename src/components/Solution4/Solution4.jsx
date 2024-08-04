import React from 'react';
import { sortArr4 } from './sortArr4';

export function Solution4() {
    return (
        <div>
            <h2>Solution With Reduce, HasOwnProperty and Object Freeze</h2>
            <pre>
                <code>{`const sortArr = ${sortArr4.toString()}`}</code>
            </pre>
        </div>
    );
}
