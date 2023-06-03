import React, { useState } from 'react';
import './QuestionBox.scss';
import { useRecoilValue } from 'recoil';
import { QuestionsAtom } from '../../Atoms/Atoms';

const QuestionBox = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const questions = useRecoilValue(QuestionsAtom);
  const currentQuestion = questions[currentIndex] || {};

  return (
    <div className="question-container">
      <h3 className='question-title'>{currentQuestion.title}</h3>
      <div>{currentQuestion.description}</div>
    </div>
  );
};

export default QuestionBox;
