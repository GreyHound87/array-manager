import React from 'react';
import { sortArr6 } from './sortArr6';

export function Solution6() {
    return (
        <div>
            <h2>Solution With FindIndex, HasOwnProperty and Object Freeze</h2>
            <pre>
                <code>{`const sortArr = ${sortArr6.toString()}`}</code>
            </pre>
        </div>
    );
}
