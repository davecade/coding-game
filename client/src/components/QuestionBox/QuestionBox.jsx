import React from 'react';
import './QuestionBox.scss';
import { useRecoilValue } from 'recoil';
import { QuestionsAtom } from '../../Atoms/Atoms';

const QuestionBox = () => {
  const questions = useRecoilValue(QuestionsAtom);

  return (
    <div className="question-container">
      {questions.map((question) => question.title)}
    </div>
  );
};

export default QuestionBox;
