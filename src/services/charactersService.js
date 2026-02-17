const BASE_URL = 'https://hp-api.onrender.com/api';

export const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  const data = await response.json();
  return data;
};
