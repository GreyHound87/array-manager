import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr6 } from './sortArr6';

export function Solution6() {
    return (
        <>
            <h2>Solution With FindIndex, HasOwnProperty and Object Freeze</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`const sortArr = ${sortArr6.toString()}`}
            </SyntaxHighlighter>
        </>
    );
}
