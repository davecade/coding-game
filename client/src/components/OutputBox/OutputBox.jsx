import React from 'react';
import './OutputBox.scss';
import { useRecoilValue } from 'recoil';
import { OutputAtom } from '../../Atoms/Atoms';

const OutputBox = () => {
  const output = useRecoilValue(OutputAtom);
  return <div className="output-container">{output}</div>;
};

export default OutputBox;
