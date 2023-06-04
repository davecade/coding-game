import React, { useEffect } from 'react';
import './OutputBox.scss';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  CodeErrorAtom,
  CodeSuccessAtom,
  CurrentQuestionIndex,
  OutputAtom,
  QuestionsAtom,
} from '../../Atoms/Atoms';
import BoxHeader from '../BoxHeader/BoxHeader';

const OutputBox = () => {
  const [output, setOutput] = useRecoilState(OutputAtom);
  const [error, setError] = useRecoilState(CodeErrorAtom);
  const [success, setSuccess] = useRecoilState(CodeSuccessAtom);
  const currentIndex = useRecoilValue(CurrentQuestionIndex);
  const questions = useRecoilValue(QuestionsAtom);
  const currentQuestion = questions[currentIndex] || {};

  useEffect(() => {
    if (currentQuestion.submitted) {
      setTimeout(() => displayResults(), 1000);
    }
  }, [currentIndex, questions]);

  const displayResults = () => {
    if (currentQuestion.isSolutionCorrect === true) {
      const results = (
        <div>
          <h2 style={{ fontWeight: 'bold' }}>All tests passed!</h2>
          <br></br>
          <p>Test cases:</p>
          {currentQuestion.testCases.map((testCase, i) => (
            <p key={i}>{`[${testCase.toString()}] - passed`}</p>
          ))}
          <br></br>
          <p>Received output:</p>
          {currentQuestion.expectedResults.map((result, i) => (
            <p key={i}>{result}</p>
          ))}
        </div>
      );
      setOutput(results);
      setSuccess(true);
      setError(false);
    } else {
      const results = (
        <div>
          <h2 style={{ fontWeight: 'bold' }}>Test failed!</h2>
          <br></br>
          <p style={{ fontWeight: 'bold' }}>Test cases:</p>
          {currentQuestion.failedCases.map((testCase, i) => (
            <p key={i}>{`[${testCase.toString()}] - failed`}</p>
          ))}
          <br></br>
          <p style={{ fontWeight: 'bold' }}>Your output:</p>
          {currentQuestion.userResults.map((result, i) => (
            <p key={i}>{result}</p>
          ))}
          {currentQuestion?.expectedResults?.length > 0 ? (
            <>
              <br></br>
              <p style={{ fontWeight: 'bold' }}>Expected output:</p>
              {currentQuestion.expectedResults.map((result, i) => (
                <p key={i}>{result}</p>
              ))}
            </>
          ) : null}
        </div>
      );
      setOutput(results);
      setSuccess(false);
      setError(true);
    }
  };

  return (
    <>
      <BoxHeader title={'Output'} addExecute={true} />
      <div
        className="output-container"
        style={{
          border: error ? '1px solid red' : success ? '1px solid green' : null,
          color: error ? 'red' : null,
        }}
      >
        {output}
      </div>
    </>
  );
};

export default OutputBox;
