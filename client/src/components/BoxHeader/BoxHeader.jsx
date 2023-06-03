import React from 'react';
import './BoxHeader.scss';
import useWebSocket from '../../Utilities/useWebSocket';
import { useRecoilValue } from 'recoil';
import { CodeInputAtom } from '../../Atoms/Atoms';
import LottieControl from '../../Utilities/Lottie/Lottie';

const BoxHeader = ({
  title = '',
  addRun = false,
  addExecute = false,
  addNavArrows = false,
}) => {
  const { send, loading, token, socketClient } = useWebSocket();
  const code = useRecoilValue(CodeInputAtom);

  const handleRunCode = () => {
    if (socketClient && socketClient.connected) {
      send(
        '/app/execute-ws-api-token',
        JSON.stringify({
          script: code,
          language: 'nodejs',
          versionIndex: 3,
        }),
        { message_type: 'execute', token },
      );
    }
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
    </div>
  );
};

export default BoxHeader;
