import './App.scss';
import 'prismjs/themes/prism.css';
import MyCodeEditor from './components/MyCodeEditor/MyCodeEditor';
import React, { useEffect } from 'react';
import QuestionBox from './components/QuestionBox/QuestionBox';
import OutputBox from './components/OutputBox/OutputBox';
import BoxHeader from './components/BoxHeader/BoxHeader';
import { getQuestions } from './Utilities/Api/Api';
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
        <QuestionBox />
      </div>
      <div className="right-side">
        <BoxHeader title={'Your Solution'} addRun={true} />
        <MyCodeEditor />
        <div className="spacer"></div>
        <OutputBox />
      </div>
    </div>
  );
}

export default App;
