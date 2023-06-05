import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3001';
} else {
  baseURL = 'https://mysterious-meadow-53796.herokuapp.com';
}

export const getQuestions = async () => {
  try {
    const response = await axios.get(baseURL + '/questions');
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const submitCode = async (questionId, solution) => {
  try {
    const response = await axios.post(baseURL + '/submit', {
      questionId,
      solution,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getJdoodleToken = async () => {
  try {
    const response = await axios.get(baseURL + '/token');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const resetCode = async (id) => {
  try {
    const response = await axios.post(baseURL + '/reset' + `/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
