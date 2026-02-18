import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/charactersService';

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters();
        setCharacters(data);
      } catch (error) {
        console.error('ERROR:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { characters, loading };
}
