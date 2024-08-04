import React from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { sortArr1 } from './sortArr1';

export function Solution1() {
    return (
        <>
            <h2>Solution With For Of Loop, In Operator and Direct Property Check</h2>
            <SyntaxHighlighter language="javascript" style={docco}>
                {sortArr1.toString()}
            </SyntaxHighlighter>
        </>
    );
}
