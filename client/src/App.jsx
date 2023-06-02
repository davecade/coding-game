import './App.scss';
import 'prismjs/themes/prism.css';
import MyCodeEditor from './components/MyCodeEditor/MyCodeEditor';
import MyMonacoCodeEditor from './components/MyCodeEditor/MyMonacoCodeEditor';
import React, { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <div className="left-side">

        <div className="test-code-container">

        </div>
      </div>
      <div className="right-side">
        <MyCodeEditor />
      </div>
    </div>
  );
}

export default App;
