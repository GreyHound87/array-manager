import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr4 } from './sortArr4';

export function Solution4() {
    return (
        <>
            <h2>Solution With Reduce, HasOwnProperty and Object Freeze</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`const sortArr = ${sortArr4.toString()}`}
            </SyntaxHighlighter>
        </>
    );
}
