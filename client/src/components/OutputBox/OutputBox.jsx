import React from 'react';
import './OutputBox.scss';
import { useRecoilValue } from 'recoil';
import { CodeErrorAtom, CodeSuccessAtom, OutputAtom } from '../../Atoms/Atoms';
import BoxHeader from '../BoxHeader/BoxHeader';

const OutputBox = () => {
  const output = useRecoilValue(OutputAtom);
  const error = useRecoilValue(CodeErrorAtom);
  const success = useRecoilValue(CodeSuccessAtom);
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
