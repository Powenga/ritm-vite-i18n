import { BASE_URL_API_RITM } from './constants';
import { TDataFeedback } from '../@types/types';

const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }

  const error: Error & { statusCode?: number } = new Error();
  error.statusCode = res.status;
  return Promise.reject(error);
};

export const sendForm = async ({
  userName,
  userPhone,
  userEmail,
  userMessage = '',
  policy,
}: TDataFeedback) => {
  try {
    const res = await fetch(`${BASE_URL_API_RITM}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName,
        userPhone,
        userEmail,
        userMessage,
        policy,
      }),
    });
    await checkResponse(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
