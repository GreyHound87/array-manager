import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr2 } from './sortArr2';

export function Solution2() {
    return (
        <>
            <h2>Solution With Some Method, Object Keys and Slice-Map</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`const sortArr = ${sortArr2.toString()}`}
            </SyntaxHighlighter>
        </>
    );
}
