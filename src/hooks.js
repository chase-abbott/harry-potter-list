import { useState, useEffect } from 'react';
import { getCharacters } from './rickAndMortyAPI.js';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return getCharacters()
      .then(res => setCharacters(res.results))
      .then(() => setLoading(false));
  }, []);

  return { characters, loading };
};

export { useCharacters };
