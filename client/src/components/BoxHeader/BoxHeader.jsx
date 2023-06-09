import React, { useEffect } from 'react';
import './BoxHeader.scss';
import useWebSocket from '../../Utilities/Hooks/useWebSocket';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  CodeInputAtom,
  CurrentQuestionIndex,
  QuestionsAtom,
} from '../../Atoms/Atoms';
import LottieControl from '../../Utilities/Lottie/Lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowLeft,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { resetCode, submitCode } from '../../Utilities/Api/Api';
import useReset from '../../Utilities/Hooks/useReset';

const BoxHeader = ({
  title = '',
  addRun = false,
  addExecute = false,
  addArrows = false,
  clickRightArrow = () => {},
  clickLeftArrow = () => {},
}) => {
  const { send, loading, setLoading, token } = useWebSocket();
  const code = useRecoilValue(CodeInputAtom);
  const currentQuestionIndex = useRecoilValue(CurrentQuestionIndex);
  const [questions, setQuestions] = useRecoilState(QuestionsAtom);
  const solution = useRecoilValue(CodeInputAtom);
  const length = questions?.length || 0;
  const { resetAll } = useReset();

  const handleRunCode = () => {
    send(
      '/app/execute-ws-api-token',
      JSON.stringify({
        script: code,
        language: 'nodejs',
        versionIndex: 3,
      }),
      { message_type: 'execute', token },
    );
  };

  const handleSubmitCode = async () => {
    const id = questions[currentQuestionIndex].id;
    try {
      setLoading(true);
      const response = await submitCode(id, solution);
      setQuestions(response);
    } catch (error) {
      console.error(error);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const isLeftDisabled = () => {
    if (currentQuestionIndex === 0) {
      return true;
    } else {
      return false;
    }
  };

  const isRightDisabled = () => {
    if (currentQuestionIndex === length - 1) {
      return true;
    } else {
      return false;
    }
  };

  const handleResetCode = async () => {
    const id = questions[currentQuestionIndex].id;
    try {
      setLoading(true);
      const response = await resetCode(id);
      setQuestions((prev) =>
        prev.map((question) =>
          response.id === question.id ? response : question,
        ),
      );
      resetAll();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="box-header">
      <div className="title">{title}</div>
      {addRun ? (
        <div className="box-header-undo-button">
          <button className="undo-arrow-left" onClick={handleResetCode}>
            {loading ? (
              <LottieControl />
            ) : (
              <FontAwesomeIcon icon={faUndo} size="2x" />
            )}
          </button>

          <button className="box-header-run-button" onClick={handleRunCode}>
            {loading ? <LottieControl /> : 'Run Code'}
          </button>
        </div>
      ) : null}
      {addExecute ? (
        <button
          className="box-header-execute-button"
          onClick={handleSubmitCode}
        >
          {loading ? <LottieControl /> : 'Submit Code'}
        </button>
      ) : null}
      {addArrows ? (
        <div className="arrows-container">
          <button
            className="arrow-left"
            disabled={isLeftDisabled()}
            style={{
              backgroundColor: isLeftDisabled() ? 'gray' : '#257dbc',
            }}
            onClick={clickLeftArrow}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <button
            className="arrow-right"
            onClick={clickRightArrow}
            disabled={isRightDisabled()}
            style={{
              backgroundColor: isRightDisabled() ? 'gray' : '#257dbc',
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BoxHeader;
