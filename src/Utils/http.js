import { MOVIES_TOKEN, API_URL } from '@src/config/movies-api';

export const getMovies = async (successCallback, errorCallback) => {
  try {
    const baseURL = `${API_URL}/popular?api_key=${MOVIES_TOKEN}`;
    const res = await fetch(baseURL);
    const data = await res.json();
    successCallback(data);
  } catch (error) {
    errorCallback(error);
  }
};
