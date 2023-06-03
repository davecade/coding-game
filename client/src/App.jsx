import './App.scss';
import 'prismjs/themes/prism.css';
import axios from 'axios';
import MyCodeEditor from './components/MyCodeEditor/MyCodeEditor';
import React, { useEffect } from 'react';
import QuestionBox from './components/QuestionBox/QuestionBox';
import OutputBox from './components/OutputBox/OutputBox';
import BoxHeader from './components/BoxHeader/BoxHeader';
import { getQuestions } from './Utilities/Api';
import { useSetRecoilState } from 'recoil';
import { QuestionsAtom } from './Atoms/Atoms';

function App() {
  const setQuestions = useSetRecoilState(QuestionsAtom);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = async () => {
    const questions = await getQuestions();
    setQuestions(questions || []);
  };

  return (
    <div className="App">
      <div className="left-side">
        <BoxHeader title={'Question'} />
        <QuestionBox />
        <div className="spacer"></div>
        <BoxHeader title={'Output'} />
        <OutputBox />
      </div>
      <div className="right-side">
        <BoxHeader title={'Your Solution'} runButton={true} />
        <MyCodeEditor />
      </div>
    </div>
  );
}

export default App;
