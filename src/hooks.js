import { useState, useEffect } from 'react';
import { getCharacters, getCharacterDetail } from './rickAndMortyAPI.js';

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

const useCharacterDetail = (id) => {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return getCharacterDetail(id)
      .then(setCharacter)
      .then(() => setLoading(false));
  }, []);

  return { character, loading };
};

export { useCharacters, useCharacterDetail };
