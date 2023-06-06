import React, { useState, useEffect } from 'react';
import AceEditor from 'react-ace';
import './MyCodeEditor.scss';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
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

  return (
    <div className="code-editor-container">
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
        showPrintMargin={false}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{
          height: '100%',
          width: '100%',
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
          borderWidth: '0',
          lineHeight: '20px',
          width: '100%',
          color: '#FFFFFF',
          borderRadius: 4,
        }}
        className="code-editor"
        value={code}
        onChange={handleChange}
      />
    </div>
  );
}

export default MyCodeEditor;
