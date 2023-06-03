import React from 'react';
import './BoxHeader.scss';
import useWebSocket from '../../Utilities/Hooks/useWebSocket';
import { useRecoilValue } from 'recoil';
import { CodeInputAtom } from '../../Atoms/Atoms';
import LottieControl from '../../Utilities/Lottie/Lottie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BoxHeader = ({
  title = '',
  addRun = false,
  addExecute = false,
  addArrows = false,
  clickRightArrow = () => {},
  clickLeftArrow = () => {},
}) => {
  const { send, loading, token, socketClient } = useWebSocket();
  const code = useRecoilValue(CodeInputAtom);

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

  const handleExecuteCode = () => {};

  return (
    <div className="box-header">
      <div className="title">{title}</div>
      {addRun ? (
        <button className="box-header-run-button" onClick={handleRunCode}>
          {loading ? <LottieControl /> : 'Run Code'}
        </button>
      ) : null}
      {addExecute ? (
        <button
          className="box-header-execute-button"
          onClick={handleExecuteCode}
        >
          {loading ? <LottieControl /> : 'Submit Code'}
        </button>
      ) : null}
      {addArrows ? (
        <div className="arrows-container">
          <button className="arrow-left" onClick={clickLeftArrow}>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
          </button>
          <button className="arrow-right" onClick={clickRightArrow}>
            <FontAwesomeIcon icon={faArrowRight} size="2x" />
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default BoxHeader;
