import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3001'
    : 'https://mysterious-meadow-53796.herokuapp.com';

// Create axios request with the base URL
const request = axios.create({ baseURL });

export const getQuestions = async () => {
  try {
    const response = await request.get('/questions');
    return response.data;
  } catch (e) {
    throw new Error(`Failed to get questions: ${e}`);
  }
};

export const submitCode = async (questionId, solution) => {
  try {
    const response = await request.post('/submit', { questionId, solution });
    return response.data;
  } catch (e) {
    throw new Error(`Failed to submit code: ${e}`);
  }
};

export const getJdoodleToken = async () => {
  try {
    const response = await request.get('/token');
    return response.data;
  } catch (e) {
    throw new Error(`Failed to get Jdoodle token: ${e}`);
  }
};

export const resetCode = async (id) => {
  try {
    const response = await request.patch(`/reset/${id}`);
    return response.data;
  } catch (e) {
    throw new Error(`Failed to reset code: ${e}`);
  }
};
