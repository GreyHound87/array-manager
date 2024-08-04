import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr3 } from './sortArr3';

export function Solution3() {
    return (
        <>
            <h2>Solution With Filter, HasOwnProperty and Spread Operator</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`const sortArr = ${sortArr3.toString()}`}
            </SyntaxHighlighter>
        </>
    );
}
