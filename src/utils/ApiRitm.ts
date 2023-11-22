import { BASE_URL_API_RITM, BASE_URL_TEST } from './constants';
import { TDataFeedback } from '../@types/types';

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((err) => {
    const error = err;
    error.statusCode = res.status;
    return Promise.reject(error);
  });
};

export const getTest = async () => {
  try {
    const res = await fetch(BASE_URL_TEST);
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const sendForm = async ({
  userName,
  userPhone,
  userEmail,
  userMessage = '',
  policy
}: TDataFeedback) => {
  try {
    const res = await fetch(`${BASE_URL_API_RITM}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        userPhone,
        userEmail,
        userMessage,
        policy
      })
    });
    const data = await checkResponse(res);
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};
