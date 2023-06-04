import { atom } from 'recoil';

const keys = {
  QUESTIONS: '@atoms_questions',
  OUTPUT: '@atoms_output',
  CODE_INPUT: '@atoms_code_input',
  SOCKET_CLIENT: '@atoms_socket_client',
  TOKEN_ATOM: '@atoms_token',
  CODE_ERROR: '@atoms_code_error',
  CODE_SUCCESS: '@atoms_code_success',
  CURRENT_QUESTION_INDEX: '@atoms_current_question_index',
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

export const CodeErrorAtom = atom({
  key: keys.CODE_ERROR,
  default: false,
});

export const CodeSuccessAtom = atom({
  key: keys.CODE_SUCCESS,
  default: false,
});

export const CurrentQuestionIndex = atom({
  key: keys.CURRENT_QUESTION_INDEX,
  default: 0,
});
