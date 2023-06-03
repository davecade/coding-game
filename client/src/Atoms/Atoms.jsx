import { atom } from 'recoil';

const keys = {
  QUESTIONS: '@atoms_questions',
  OUTPUT: '@atoms_output',
  CODE_INPUT: '@atoms_code_input',
  SOCKET_CLIENT: '@atoms_socket_client',
  TOKEN_ATOM: '@atoms_token',
};

export const QuestionsAtom = atom({
  key: keys.QUESTIONS,
  default: [],
});

export const OutputAtom = atom({
  key: keys.OUTPUT,
  default: null,
});

export const CodeInputAtom = atom({
  key: keys.CODE_INPUT,
  default: '',
});
