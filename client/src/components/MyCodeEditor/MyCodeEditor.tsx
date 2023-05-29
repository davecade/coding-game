import React, { useState } from 'react';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import Editor from 'react-simple-code-editor';

const MyComponent = () => {
    const [code, setCode] = useState(``);

    return (
        <Editor
            value={code}
            onValueChange={newCode => setCode(newCode)}
            highlight={newCode => highlight(newCode, languages.js)}
            padding={10}
            style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
            }}
        />
    );
}

export default MyComponent;