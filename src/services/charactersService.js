const { REACT_APP_API_URL } = process.env;

export const getAllCharacters = async () => {
  const response = await fetch(`${REACT_APP_API_URL}/characters`);
  const data = await response.json();
  return data;
};
