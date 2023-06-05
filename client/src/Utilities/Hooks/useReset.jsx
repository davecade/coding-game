import { useSetRecoilState } from 'recoil';
import {
  CodeErrorAtom,
  CodeInputAtom,
  CodeSuccessAtom,
  OutputAtom,
} from '../../Atoms/Atoms';

const useReset = () => {
  const setOutput = useSetRecoilState(OutputAtom);
  const setError = useSetRecoilState(CodeErrorAtom);
  const setSuccess = useSetRecoilState(CodeSuccessAtom);
  const setCode = useSetRecoilState(CodeInputAtom);

  const resetAll = () => {
    setOutput('');
    setError('');
    setSuccess('');
    setCode('');
  };

  return {
    resetAll,
  };
};

export default useReset;
