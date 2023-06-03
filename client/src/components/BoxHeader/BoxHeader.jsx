import React from 'react';
import './BoxHeader.scss';
import useWebsocket from '../../Utilities/useWebocket';
import { useRecoilValue } from 'recoil';
import { CodeInputAtom } from '../../Atoms/Atoms';

const BoxHeader = ({ title = '', runButton = false }) => {
  const { token, socketClient } = useWebsocket();
  const code = useRecoilValue(CodeInputAtom);

  const handleRunCode = () => {
    if (socketClient) {
      socketClient.send(
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

  return (
    <div className="box-header">
      <div className="title">{title}</div>
      {runButton ? (
        <button className="box-header-button" onClick={handleRunCode}>
          Run Code
        </button>
      ) : null}
    </div>
  );
};

export default BoxHeader;
