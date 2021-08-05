const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json());
};

const getCharacterDetail = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};

export { getCharacters, getCharacterDetail };
