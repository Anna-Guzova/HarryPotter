import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/charactersService';

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCharacters().then(data => {
      setCharacters(data);
      setLoading(false);
    });
  }, []);

  return { characters, loading };
}
