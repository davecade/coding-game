import React from 'react';
import './ProgressBar.scss';
import { Line } from 'rc-progress';
import { useRecoilValue } from 'recoil';
import { QuestionsAtom } from '../../Atoms/Atoms';

const ProgressBar = () => {
  const questions = useRecoilValue(QuestionsAtom);
  const length = questions?.length || 0;

  const calculatePercentage = () => {
    let completedQuestions = 0;

    questions.forEach((question) => {
      if (question.submitted) {
        completedQuestions++;
      }
    });

    let percentage = (completedQuestions / length) * 100;

    return Math.floor(percentage);
  };

  const nodes = [];

  for (let i = 0; i < length; i++) {
    const nodeProgress = (i / (length - 1)) * 100;
    const isActive = calculatePercentage() >= nodeProgress;

    nodes.push(
      <div
        key={i}
        className={`node ${isActive ? 'active' : ''}`}
        style={{ left: `${nodeProgress}%` }}
      />,
    );
  }

  return (
    <div className="progress-bar-container">
      <Line
        percent={calculatePercentage()}
        strokeWidth="2"
        trailWidth="2"
        strokeColor="#108ee9"
        trailColor="#D3D3D3"
      >
        <div className="nodes-container">{nodes}</div>
      </Line>
    </div>
  );
};

export default ProgressBar;
