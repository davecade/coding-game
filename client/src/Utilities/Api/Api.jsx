import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = '';
}

export const getQuestions = async () => {
  try {
    const response = await axios.get(baseURL + '/questions');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
