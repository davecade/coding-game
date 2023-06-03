import React from 'react';
import './OutputBox.scss';
import { useRecoilValue } from 'recoil';
import { OutputAtom } from '../../Atoms/Atoms';

const OutputBox = () => {
  const output = useRecoilValue(OutputAtom);
  console.log('output', output);
  return <div className="output-container">{output}</div>;
};

export default OutputBox;
