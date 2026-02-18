const BASE_URL = 'https://hp-api.onrender.com/api';

export const getAllCharacters = async () => {
  const response = await fetch(`${BASE_URL}/characters`);
  // console.log('STATUS:', response.status);
  const data = await response.json();
  // console.log('DATA:', data);
  return data;
};
