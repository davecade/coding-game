import React, { useState, useEffect } from 'react';
import './MyCodeEditor.scss';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript'; // Or whatever language you want to support
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CodeInputAtom,
  CurrentQuestionIndex,
  QuestionsAtom,
} from '../../Atoms/Atoms';
import useWebSocket from '../../Utilities/Hooks/useWebSocket';

function MyCodeEditor() {
  const [language, setLanguage] = useState('');
  const [code, setCode] = useRecoilState(CodeInputAtom);
  const currentIndex = useRecoilValue(CurrentQuestionIndex);
  const questions = useRecoilValue(QuestionsAtom);
  const currentQuestion = questions[currentIndex] || {};
  const hasSavedSolution = !!currentQuestion.solution;
  const { send } = useWebSocket();

  useEffect(() => {
    if (hasSavedSolution) {
      setCode(currentQuestion.solution);
    }
  }, [currentIndex]);

  const handleChange = (newCode) => {
    setCode(newCode);
    send('/app/execute-ws-api-token', newCode, {
      message_type: 'input',
    });
  };

  const lineNumbers = code
    .split('\n')
    .map((_, i) => i + 1)
    .join('\n');

  const highlight = (code) => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  return (
    <div className="code-editor-container">
      <textarea className="line-number" value={lineNumbers} readOnly />
      <Editor
        className="code-editor"
        value={code}
        onValueChange={handleChange}
        highlight={highlight}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          borderWidth: '0',
          lineHeight: '20px',
          width: '100%',
          minHeight: '10rem',
          color: '#FFFFFF',
          borderRadius: 4,
        }}
      />
    </div>
  );
}

export default MyCodeEditor;
