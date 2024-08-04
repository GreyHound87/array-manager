import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr5 } from './sortArr5';

export function Solution5() {
    return (
        <>
            <h2>Solution With Every Method, Concat and Map</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {`const sortArr = ${sortArr5.toString()}`}
            </SyntaxHighlighter>
        </>
    );
}
